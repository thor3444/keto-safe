import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { nutrientsUrl } from "../config/keys";
import { FoodContext } from "../FoodContext";
import axios from "axios";

const Food = props => {
	const [name] = useState(props.match.params.name);
	const [loading, setLoading] = useState(false);
	const [food, setFood] = useState({});
	const [error, setError] = useState(null);

	const [list, setList] = useContext(FoodContext);

	const handleClick = () => {
		setList([...list, food]);
		props.history.push("/list");
	};

	const ketoSafe = () => ({
		color:
			food.nf_total_carbohydrate - food.nf_dietary_fiber >= 10 ? "#eb4d4b" : ""
	});

	useEffect(() => {
		console.log(`Fetching ${name}`);
		setLoading(true);

		axios
			.post(
				nutrientsUrl,
				{ query: name },
				{
					headers: {
						"x-app-id": process.env.REACT_APP_APP_ID,
						"x-app-key": process.env.REACT_APP_APP_KEY
					}
				}
			)
			.then(res => {
				setLoading(false);
				setFood(res.data.foods[0]);

				console.log(res.data.foods[0]);
			})
			.catch(err => setError(err));
	}, [name]);

	return (
		<section className="jumbotron jumbotron-fluid mb-0">
			<div className="container text-center">
				{loading ? (
					<>
						{error ? (
							<>
								<h1>Item was not found</h1>
								<Link to="/" className="btn btn-purple mt-3">
									<i className="fas fa-arrow-left" /> Back to Search
								</Link>
							</>
						) : (
							<>
								<h2>
									Finding results for{" "}
									<span className="text-capitalize">"{name}"</span>
								</h2>
								<div className="spinner-border text-purple my-5 p-4" />
							</>
						)}
					</>
				) : (
					<>
						<h2>
							{food.nf_total_carbohydrate - food.nf_dietary_fiber >= 10 ? (
								<span className="text-capitalize">
									{food.food_name} <i className="fas fa-times text-danger" />
								</span>
							) : (
								<span className="text-capitalize">
									{food.food_name} <i className="fas fa-check text-success" />
								</span>
							)}
						</h2>
						<div className="row">
							<div className="col-md-4">
								{food.photo && (
									<img
										src={food.photo.thumb}
										alt={food.food_name}
										className="img-fluid mb-4 mt-3"
									/>
								)}
								<button
									className="btn btn-purple btn-block mb-3"
									onClick={() => handleClick()}
								>
									<i className="fas fa-plus" /> Add to List
								</button>
							</div>
							<div className="col-md-8">
								<table className="table table-borderless table-sm text-left table-hover">
									<tbody>
										<tr>
											<th>Calories</th>
											<td>{(food.nf_calories + 0).toFixed(0)}</td>
										</tr>
										<tr>
											<th>Servings</th>
											<td>
												{food.serving_qty} {food.serving_unit}
											</td>
										</tr>
										<tr>
											<th>Weight</th>
											<td>{(food.serving_weight_grams + 0).toFixed(1)} g</td>
										</tr>
										<tr>
											<th>Protein</th>
											<td>{(food.nf_protein + 0).toFixed(0)} g</td>
										</tr>
										<tr>
											<th>Fats</th>
											<td>{(food.nf_total_fat + 0).toFixed(0)} g</td>
										</tr>
										<tr>
											<th>Carbohydrates</th>
											<td>{(food.nf_total_carbohydrate + 0).toFixed(0)} g</td>
										</tr>
										<tr>
											<th>Fiber</th>
											<td>{(food.nf_dietary_fiber + 0).toFixed(0)} g</td>
										</tr>
										<tr>
											<th>Net Carbs</th>
											<td>
												<span style={ketoSafe()}>
													{(
														food.nf_total_carbohydrate - food.nf_dietary_fiber
													).toFixed(0)}{" "}
													g
												</span>
											</td>
										</tr>
										<tr>
											<th>Sugars</th>
											<td>{(food.nf_sugars + 0).toFixed(0)} g</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Food;

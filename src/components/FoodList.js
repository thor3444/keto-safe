import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { instantUrl } from "../config/keys";
import axios from "axios";

const FoodList = props => {
	const [query] = useState(props.match.params.query);
	const [loading, setLoading] = useState(false);
	const [common, setCommon] = useState([]);
	const [branded, setBranded] = useState([]);

	useEffect(() => {
		console.log(`Fetching ${query}`);
		setLoading(true);

		axios
			.post(
				instantUrl,
				{ query },
				{
					headers: {
						"x-app-id": process.env.REACT_APP_APP_ID,
						"x-app-key": process.env.REACT_APP_APP_KEY
					}
				}
			)
			.then(res => {
				setLoading(false);

				setCommon(res.data.common);
				setBranded(res.data.branded);
			});
	}, [query]);

	return (
		<section className="jumbotron jumbotron-fluid mb-0">
			<div className="container text-center">
				{loading ? (
					<>
						<h2>
							Finding results for{" "}
							<span className="text-capitalize">"{query}"</span>
						</h2>
						<div className="spinner-border text-purple my-5 p-4" />
					</>
				) : (
					<>
						<h2>
							Showing results for{" "}
							<span className="text-capitalize">"{query}"</span>
						</h2>
						<ul
							className="nav nav-tabs d-flex justify-content-center"
							role="tablist"
						>
							<li className="nav-item">
								<a
									className="nav-link active"
									id="common-tab"
									data-toggle="tab"
									href="#common"
									role="tab"
								>
									Common
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="profile-tab"
									data-toggle="tab"
									href="#branded"
									role="tab"
								>
									Branded
								</a>
							</li>
						</ul>
						<div className="tab-content">
							<div
								className="tab-pane fade show active mt-3"
								id="common"
								role="tabpanel"
							>
								{common.length === 0 ? (
									<h4 className="text-secondary mt-5">Nothing Found</h4>
								) : (
									<>
										{common.map((food, index) => (
											<Link
												key={index}
												to={"/food/" + food.food_name.replace(/\d+% ?/g, "")}
												className="card card-body text-center text-decoration-none text-dark"
												style={{ maxWidth: "500px", margin: "0 auto 15px" }}
											>
												<div className="row no-gutters">
													<div className="col-4">
														<img
															src={food.photo.thumb}
															height="50px"
															alt={food.food_name}
														/>
													</div>
													<div className="col-8 d-flex justify-content-center align-items-center">
														<h5 className="card-title text-capitalize mb-0">
															{food.food_name}
														</h5>
													</div>
												</div>
											</Link>
										))}
									</>
								)}
							</div>
							<div className="tab-pane fade mt-3" id="branded" role="tabpanel">
								{branded.length === 0 ? (
									<h4 className="text-secondary mt-5">Nothing Found</h4>
								) : (
									<>
										{branded.map((food, index) => (
											<Link
												key={index}
												to={"/food/" + food.food_name.replace(/\d+% ?/g, "")}
												className="card card-body text-center text-decoration-none text-dark"
												style={{ maxWidth: "500px", margin: "0 auto 15px" }}
											>
												<div className="row no-gutters">
													<div className="col-4 d-flex justify-content-center align-items-center">
														<img
															src={food.photo.thumb}
															height="50px"
															alt={food.food_name}
														/>
													</div>
													<div className="col-8">
														<h6 className="card-title text-capitalize mb-0 text-truncate">
															{food.brand_name}
														</h6>
														<h5 className="card-title text-capitalize mb-0 text-truncate">
															{food.food_name}
														</h5>
														<p className="text-purple mb-0">
															{food.nf_calories.toFixed(0)}{" "}
															<span className="text-secondary">
																per {food.serving_unit}
															</span>
														</p>
													</div>
												</div>
											</Link>
										))}
									</>
								)}
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default FoodList;

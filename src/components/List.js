import React, { useState, useEffect, useContext } from "react";
import { FoodContext } from "../FoodContext";

const List = props => {
	const [list, setList] = useContext(FoodContext);

	return (
		<section className="jumbotron jumbotron-fluid mb-0 py-5">
			<div className="container text-center">
				<h1 className="display-4 pt-4 mb-3">Shopping List</h1>
				{list.length === 0 ? (
					<p className="lead text-secondary">No items found</p>
				) : (
					<>
						{list.map((item, index) => (
							<div className="card card-body mb-3" key={index}>
								<div className="row no-gutters">
									<div className="col-md-3 d-flex align-items-center justify-content-center">
										<img
											src={item.photo.thumb}
											alt={item.food_name}
											height="50px"
										/>
									</div>
									<div className="col-md-9">
										<div className="mt-3 d-flex flex-column flex-sm-row justify-content-around align-items-center">
											<div className="flex-fill">
												<h6 className="text-capitalize text-truncate">
													{item.food_name}
												</h6>
											</div>
											<div className="flex-fill">
												<h6>Calories</h6>
												<p className="text-purple mb-0">
													{(item.nf_calories + 0).toFixed(0)}
												</p>
											</div>
											<div className="flex-fill">
												<h6>Servings</h6>
												<p className="text-secondary mb-0">
													{item.serving_qty} {item.serving_unit}
												</p>
											</div>
											<div className="flex-fill">
												<h6>Protein</h6>
												<p className="text-secondary mb-0">
													{(item.nf_protein + 0).toFixed(0)}
												</p>
											</div>
											<div className="flex-fill">
												<h6>Fats</h6>
												<p className="text-secondary mb-0">
													{(item.nf_total_fat + 0).toFixed(0)}
												</p>
											</div>
											<div className="flex-fill">
												<h6>Net Carbs</h6>
												<p className="text-purple mb-0">
													{(
														item.nf_total_carbohydrate - item.nf_dietary_fiber
													).toFixed(0)}
												</p>
											</div>
											<div className="flex-fill">
												<h6>Sugars</h6>
												<p className="text-secondary mb-0">
													{(item.nf_sugars + 0).toFixed(0)}
												</p>
											</div>
										</div>
										{/* <table className="table table-borderless table-sm table-responsive">
											<tbody>
												<tr>
													<th>Calories</th>
													<th>Servings</th>
													<th>Protein</th>
													<th>Fats</th>
													<th>Net Carbs</th>
													<th>Sugars</th>
												</tr>
												<tr>
													<td className="text-purple">
														{(item.nf_calories + 0).toFixed(0)}
													</td>
													<td />
													<td>{(item.nf_protein + 0).toFixed(0)}</td>
													<td>{(item.nf_total_fat + 0).toFixed(0)}</td>
													<td>
														{(
															item.nf_total_carbohydrate - item.nf_dietary_fiber
														).toFixed(0)}
													</td>
													<td>{(item.nf_sugars + 0).toFixed(0)}</td>
												</tr>
											</tbody>
										</table> */}
									</div>
								</div>
							</div>
						))}
					</>
				)}
			</div>
		</section>
	);
};

export default List;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FoodContext } from "../FoodContext";

const Navbar = () => {
	const [foods, setFoods] = useContext(FoodContext);

	return (
		<nav className="navbar navbar-light">
			<div className="container d-flex flex-column flex-md-row">
				<span className="navbar-brand mb-0 h1">Keto Safe</span>
				<ul className="navbar-nav m-auto ml-md-auto mr-md-0 flex-row">
					<li className="nav-item">
						<NavLink
							className="nav-link text-center"
							activeClassName="active"
							exact={true}
							to="/"
						>
							<i className="fas fa-search" /> Search
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className="nav-link text-center"
							activeClassName="active"
							exact={true}
							to="/info"
						>
							<i className="fas fa-info-circle" /> Info
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className="nav-link text-center d-flex align-items-center justify-content-center"
							activeClassName="active"
							exact={true}
							to="/list"
						>
							<i className="fas fa-stream mr-1" /> List{" "}
							<span className="badge badge-pill badge-purple ml-1">
								{foods.length}
							</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

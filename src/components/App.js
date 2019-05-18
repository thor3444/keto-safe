import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { FoodProvider } from "../FoodContext";

import Navbar from "./Navbar";
import Search from "./Search";
import Info from "./Info";
import FoodList from "./FoodList";
import Food from "./Food";
import List from "./List";

const App = () => {
	return (
		<Router>
			<FoodProvider>
				<Navbar />
				<Route path="/" exact component={Search} />
				<Route path="/info" exact component={Info} />
				<Route path="/search/:query" exact component={FoodList} />
				<Route path="/food/:name" exact component={Food} />
				<Route path="/list" exact component={List} />
			</FoodProvider>
		</Router>
	);
};

export default App;

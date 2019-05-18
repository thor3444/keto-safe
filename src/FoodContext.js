import React, { useState, createContext } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
	const [food, setFood] = useState([]);

	return (
		<FoodContext.Provider value={[food, setFood]}>
			{children}
		</FoodContext.Provider>
	);
};

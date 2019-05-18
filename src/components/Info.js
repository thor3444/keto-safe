import React from "react";

const Info = () => {
	return (
		<section className="jumbotron jumbotron-fluid mb-0">
			<div className="container text-center py-5">
				<h1 className="display-4 pt-4">About This App</h1>
				<h5 className="text-purple mb-3">By: Raymond Kneipp III</h5>
				<p className="text-secondary m-auto" style={{ maxWidth: "600px" }}>
					The Ketogenic diet is when you consume high fat, adequate protein, and
					low carbohydrates. Your body uses fats as its primary source of energy
					rather than carbohydrates. This app will determine if a food is safe
					to be eaten following this diet.
				</p>
			</div>
		</section>
	);
};

export default Info;

import React, { useState } from "react";

const Search = ({ history }) => {
	const [search, setSearch] = useState("");

	const handleSearch = e => {
		e.preventDefault();
		history.push(`/search/${encodeURIComponent(search)}`);
	};

	return (
		<section className="jumbotron jumbotron-fluid mb-0 py-5">
			<div className="container text-center py-5">
				<h1 className="display-4 pt-4">Search For Foods</h1>
				<p className="lead text-secondary">
					Easily find foods that are safe for a ketogenic diet
				</p>

				<form onSubmit={e => handleSearch(e)}>
					<div className="input-group input-group-lg search">
						<input
							type="text"
							className="form-control search"
							placeholder="Search"
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-danger"
								type="button"
								onClick={() => setSearch("")}
							>
								<i className="fas fa-times" />
							</button>
							<button
								className="btn btn-outline-secondary btn-outline-purple"
								type="submit"
							>
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Search;

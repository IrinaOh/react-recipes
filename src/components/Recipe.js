import React from "react";
const API_KEY = process.env.REACT_APP_API_RECIPE_KEY;

// const Recipe = () => ;
class Recipe extends React.Component {
	state = {
		activeRecipe: []
	};

	getRecipe = async e => {
		const title = this.props.location.state.recipe;
		const req = await fetch(
			`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}&page=2`
		);

		const res = await req.json();
		console.log(this.state.recipes);
	};

	render() {
		console.log(this.props);
		return <div>Recipe Component!</div>;
	}
}

export default Recipe;

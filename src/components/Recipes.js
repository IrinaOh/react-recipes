import React from "react";

const Recipes = props => (
	<div className="grid">
		{props.recipes.map(recipe => {
			return (
				<div key={recipe.recipe_id}>
					<div className="recipes__box">
						<img
							className="recipes__box"
							src={recipe.image_url}
							alt={recipe.title}
						/>
						<div className="recipe__text">
							<h5 className="recipes__title">
								{recipe.title.length < 20
									? `${recipe.title}`
									: `${recipe.title.substring(0, 25)}...`}
							</h5>
							<p className="recipe__subtitle">
								Publisher: <span> {recipe.publisher}</span>
							</p>
						</div>
						<button className="recipe_buttons">View Recipe</button>
					</div>
				</div>
			);
		})}
	</div>
);

export default Recipes;

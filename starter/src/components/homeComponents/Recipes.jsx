import React, { useState } from "react";
import RecipeCard from "../newRecipeComponents/RecipeCard";
import styles from "./HomeScreen.module.css";
import { BiSearchAlt2 } from 'react-icons/bi'
import classes from '../newRecipeComponents/RecipeCard.module.css'

const RecipeContainer = ({recipes}) => {
  const [search, setSearch] = useState("");

  const shopwRecipes = recipes
    .filter((recipe, index) => {
      let recipeName = recipe.recipe_name.toLowerCase()
      let searchName = search.toLowerCase()
      return recipeName.includes(searchName)
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe}/>
    })

  return (
    <div>
      <span className="search-container">
        <BiSearchAlt2 className="search-icon" color="#DA7635" />
        <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for a recipe!"
        />
      </span>
      <div className={classes['recipes-container']}>
        {shopwRecipes ? shopwRecipes : <h1>No recipes found!</h1>}
      </div>
    </div>
  );
};

export default RecipeContainer;

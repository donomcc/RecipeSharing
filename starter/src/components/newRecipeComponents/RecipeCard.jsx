import React from "react";
import classes from "./RecipeCard.module.css"
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    return (
        <div className={classes.card}>
            <img src={recipe.image_url}alt="" />
            <div className={classes.container}>
            <h2>{recipe.recipe_name}</h2>
            <button className={classes['blue-btn']} onClick={clickHandler}>See More</button>
            </div>
        </div>
    )
}

export default RecipeCard
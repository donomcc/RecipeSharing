import React, { useState, useEffect } from 'react'
import AdBanner from './AdBanner'
import classes from './HomeScreen.module.css'
import axios from 'axios'
import Recipes from './Recipes'

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])

  const getRecipes = () => {
    axios
        .get("https://recipes.devmountain.com/recipes")
        .then((res) => {
          setRecipes(res.data)
          console.log(res.data);
        })
}

useEffect(()=>{
  getRecipes()
},[])

  


  return (
    <div className={classes.home}>
      <AdBanner />
      <Recipes recipes={recipes}/>
    </div>
  )
}

export default HomeScreen
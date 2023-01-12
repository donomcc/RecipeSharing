import React from "react";
import classes from './DetailScreen.module.css'

const DetailRecipeImage = ({ image, title }) => {
    return (
        <div className={classes.banner} style={{
            backgroundSize: 'contain',
            background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
            backgroundRepeat: "no-repeat"
        }}
        >
        <div className={classes['ad-txt']}>
            <h1>{title}</h1>
        </div>    
        </div>
    )
}

export default DetailRecipeImage
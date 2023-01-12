import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import classes from './Header.module.css'

const Header = () => {

  return (
    <header className={classes.header}>
      <div>
      <nav className={classes.nav}>
      <h2 className={classes['site-title']}>Devmountain Eatery</h2>
        <ul className={classes['nav-links']}>
          <Link to='/'><a>Home</a></Link>
          <Link to='/newRecipe'><a>Add Recipe</a></Link>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;

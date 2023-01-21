import React from 'react';
import {Link} from "react-router-dom";
import classes from "./mainNavigation.module.css";
function MainNavigation(){
    return( <div>
        <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/recommendations">Recommendations</Link>
      <Link to="/about">About</Link>
    </nav>
    </div>
    );
}
export default MainNavigation;
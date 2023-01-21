import React from 'react';
import {Link} from "react-router-dom";
import classes from "./mainNavigation.module.css";
function MainNavigation(){
    return( <div>
                <nav className="navbar navbar-expand-lg navbar-dark" >
        <a className="navbar-brand" href="#" style={{marginLeft:"40px"}} >MoviesThug..</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto " style={{margin:'0 auto'}}>
            <li className="nav-item active" style={{margin:'0 10px 0 40px'}}>
              <Link to="/home/">Home</Link>
            </li>
            <li className="nav-item active" style={{margin:'0 10px 0 40px'}}>
              <Link to="/movies">Movies</Link>
            </li>
            <li className="nav-item active" style={{margin:'0 10px 0 40px'}}>
              <Link to="/recommendations">Recommendations</Link>
            </li>
            <li className="nav-item active" style={{margin:'0 10px 0 40px'}}>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <form className="form-inline my-2">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
    );
}
export default MainNavigation;
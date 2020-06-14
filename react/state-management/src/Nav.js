import React, { useContext } from 'react';
import {MovieContext} from './MovieContext';
import './Nav.css';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
    <div className="topnav">
        <h3>Movie list</h3>
        <p>Number of movies: {movies.length}</p>
    </div>);
};

export default Nav;

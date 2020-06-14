import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    };
    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const addMovie = (e) => {
        e.preventDefault(); /* to the page not refresh when clicking button */
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}]);
    };

    return (
        <form onSubmit={addMovie}>
            <p>Name: </p><input type="text" name="name" value={name} onChange={updateName}/>
            <p>Price: </p><input type="text" name="price" value={price} onChange={updatePrice}/>
            <button>Add movie</button>
        </form>
    );
};

export default AddMovie;

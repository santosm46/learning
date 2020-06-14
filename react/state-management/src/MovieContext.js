import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            id: 123,
            name: 'Harry pot head',
            price: '$4.20'
        },
        {
            id: 124,
            name: 'Killer bean',
            price: '$0.99'
        },
        {
            id: 125,
            name: 'Inception',
            price: '$3.333333333'
        },
        {
            id: 126,
            name: 'Shrek 5',
            price: '$5'
        }
        
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};

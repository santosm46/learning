import React from "react";
import './Tweet.css';

const comidas = [
    'sorvete',
    'batata',
    'feijão'
];

function Tweet({ name, message}) {

    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>number of likes: </h3>
        </div>
    );
}

export default Tweet;

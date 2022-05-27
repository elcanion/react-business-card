import React from "react";
import Card from "./Card";

const Cards = ({ cards }) => {
    return (
        <div>
            {cards.map((card, index) => <Card card={card} key={index}/>)}
        </div>
    )
}

export default Cards
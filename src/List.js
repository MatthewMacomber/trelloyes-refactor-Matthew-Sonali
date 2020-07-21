import React from 'react';
import Card from './Card.js';
import Store from './store';
import './List.css';

function List(props) {
    const cardsList = props.cards.map(card => {
        const cardObj = Store.allCards[card];
        return <Card key={cardObj.id} id={cardObj.id} title={cardObj.title} content={cardObj.content}/>
    });
    
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cardsList}
                <button type="button" className="List-add-button">
                + Add Random Card
                </button>
            </div>
        </section>
    );
}


export default List;
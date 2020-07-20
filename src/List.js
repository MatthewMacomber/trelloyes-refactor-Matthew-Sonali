import React from 'react';
import Card from './Card.js';
import Store from './store';

function List(props) {
    const cardsList = props.cards.map(card => {
        const cardObj = Store.allCards[card];
        return <Card id={cardObj.id} title={cardObj.title} content={cardObj.content}/>
    });
    
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cardsList}
            </div>
        </section>
    );
}


export default List;
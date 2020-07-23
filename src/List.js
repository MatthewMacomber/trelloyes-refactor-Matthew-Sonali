import React from 'react';
import Card from './Card.js';
import Store from './store';
import './List.css';

class List extends React.Component {

  
    
    render() {

        const cardsList = this.props.cards.map(card => {
            const cardObj = Store.allCards[card];
            return <Card key={cardObj.id} id={cardObj.id} title={cardObj.title} content={cardObj.content} handleDeleteButton={this.props.handleDeleteButton}/>
        });

        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
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
}


export default List;
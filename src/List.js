import React from 'react';
import Card from './Card.js';
import './List.css';

class List extends React.Component {

  
    
    render() {

        const cardsList = this.props.cards.map(card => {
            return <Card key={card.id} id={card.id} title={card.title} content={card.content} handleDeleteButton={this.props.handleDeleteButton}/>
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
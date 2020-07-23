import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="Card">
                <button type="button" onClick={() => {console.log(`this ${this.props.id} is being clicked`)}}>delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}


export default Card;


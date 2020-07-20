import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div id={this.props.id} class="Card">
                <button type="button">delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}



export default Card;


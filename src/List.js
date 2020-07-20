import React from 'react';
import Card from './Card.js';

class List extends React.Component {
    render() {
        return (
            <section class="List">
                <header class="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div class="List-cards">
                    <List />
                </div>
            </section>
        );
    }
}

export default List;
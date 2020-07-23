import React from 'react';
import List from './List';
import Store from './store';
import './App.css';

function omit(obj, toOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) => key === toOmit ? newObj : {...newObj, [key]: value}, {}
  );
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends React.Component {
    state = {
      lists: Store.lists,
      allCards: Store.allCards
    }

  handleDeleteButton = (cardId) => {
    
    const {lists, allCards} = this.state;
    
    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      lists: newLists,
      allCards: newCards
    })
  }

  handleAddCard =(listId) => {
   const newCard = newRandomCard()
  // listId to determine which list to add the card to 
  const {lists, allCards} = this.state;

  const newCards = {...allCards, [newCard.id]: newCard}
 

  const newLists = lists.map(list => {
        if(list.id === listId) {
          return {...list, cardIds: [...list.cardIds, newCard.id]}

        }
        return list
      }
    )

    this.setState(
      {
        lists: newLists,
        allCards: newCards
      }
    )
  
  }

  render () {

    const lists = this.state.lists.map(list => {
      console.log('List cards thing')
      console.log(this.state.allCards['a']);
      return <List key={list.id} id={list.id} header={list.header} cards={list.cardIds.map(id => this.state.allCards[id])} handleDeleteButton={this.handleDeleteButton} handleAddCard={this.handleAddCard}/>;
     });

    return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
  }
}

export default App;

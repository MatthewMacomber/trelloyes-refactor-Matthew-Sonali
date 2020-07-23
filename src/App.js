import React from 'react';
import List from './List';
import Store from './store';
import './App.css';

function omit(obj, toOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) => key === toOmit ? newObj : {...newObj, [key]: value}, {}
  );
}

class App extends React.Component {
    state = {
      lists: Store.lists,
      allCards: Store.allCards
    }

  handleDeleteButton = (cardId) => {
    console.log(cardId)
    
    const {lists, allCards} = this.state;
    console.log(this.state.lists)
    
    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    console.log(newLists);
    this.setState({
      lists: newLists,
      allCards: newCards
    })
  }

  handleAddCard =(id) => {
    console.log('Add card ' + id)
  
  }

  render () {

    const lists = this.state.lists.map(list => {
      console.log('List cards thing')
      console.log(this.state.allCards['a']);
      return <List key={list.id} id={list.id} header={list.header} cards={list.cardIds.map(id => this.state.allCards[id])} handleDeleteButton={this.handleDeleteButton}/>;
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

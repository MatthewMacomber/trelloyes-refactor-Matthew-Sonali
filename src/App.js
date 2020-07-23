import React from 'react';
import List from './List';
import Store from './store';
import './App.css';

class App extends React.Component {
    state = {
      lists: Store.lists,
      allCards: Store.allCards
    }

  handleDeleteButton = (id) => {
   console.log(id)
  }

  render () {

    const lists = this.state.lists.map(list => {
      return <List key={list.id} id={list.id} header={list.header} cards={list.cardIds} handleDeleteButton={this.handleDeleteButton}/>;
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

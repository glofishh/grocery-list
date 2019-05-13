import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';
import * as List from '../../database/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(List);
    this.state = {
      list: List.groceryList
    }
    this.addGrocery = this.addGrocery.bind(this);
    // this.sortByDescription = this.sortList.bind(this, 'description');
    // this.sortByQuantity = this.sortList.bind(this, 'quantity');
  }

  addGrocery (description, quantity) {
    let list = this.state.list;
    let item;

    if (item = this.listContains(description)) {
      item.quantity = quantity;
    } else {
      list.push({
        id: this.nextId(),
        description, description,
        quantity: quantity
      })
    }
    this.setState({
      list: list
    });
  }


  listContains (description) {
    let list = this.state.list;

    for (let item of list) {
      if (item.description === description) {
        return item;
      }
    }

    return false;
  }
  
  //sorting function ignore!!
  // sortList (sortBy, sortIncreasing) {
  //   console.log(sortBy);
  //   let list = this.state.list;

  //   list.sort((a,b) => {
  //     if (sortIncreasing) {
  //       return a[sortBy] < b[sortBy] ? -1 : 1;
  //     } else {
  //       return a[sortBy] > b[sortBy] ? -1 : 1;
  //     }
  //   });

  //     this.setState({
  //     list: list
  //   });
  // }

  nextId () {
    let list = this.state.list;

    return list[list.length-1].id + 1;
  }

  render () {
    return (
      <div>
        <h1>Grocery List</h1>
        <AddGrocery addGrocery={this.addGrocery} />
        <GroceryList 
          list={this.state.list} 
          sortByDescription={this.sortByDescription} 
          sortByQuantity={this.sortByQuantity}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
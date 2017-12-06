import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';
import ShoppingList from './Components/ShoppingList';
import AddToList from './Components/AddToList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        items: [],
    }
}

getItems(){
  this.setState({items: [
      {
          id:uuid.v4(),
          title: 'Bread',
          category: 'Pantry'
      },
      {
          id:uuid.v4(),
          title: 'Milk',
          category: 'Dairy'
    },
    {
          id:uuid.v4(),
          title: 'Apples',
          category: 'Produce'
    }
  ]});

}
componentWillMount(){
  this.getItems();

}

    handleItem(item){
      // console.log(p);
      let items = this.state.items;
      items.push(item);
      this.setState({items: items}); 
    }
    handleDeleteItem(id){
      let items = this.state.items;
      let index = items.findIndex(x => x.id === id);
      items.splice(index, 1);
      this.setState({items:items});
    }  
render() {
    return (
      <div >
        <h1>Shopping List</h1>
        <AddToList addItem={this.handleItem.bind(this)}/>
        <ShoppingList items={this.state.items} onDelete={this.handleDeleteItem.bind(this)}/>
      </div>
    );
  }
}

export default App;

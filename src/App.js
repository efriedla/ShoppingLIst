import React, { Component } from 'react';
import uuid from 'uuid';
// import $ from 'jquery';
import './App.css';
import {PageHeader,Panel,Button} from 'react-bootstrap';
import ShoppingList from './Components/ShoppingList';
import AddToList from './Components/AddToList';
import DoneList from './Components/DoneList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        items: [],
        open: false,
        active: false,
        done: []
        
    }
}

getItems(){
  this.setState({items: [
      {
          id:uuid.v4(),
          title: 'Bread',
          category: 'Pantry',
          done: false
      },
      {
          id:uuid.v4(),
          title: 'Milk',
          category: 'Dairy',
          done: false
    },
    {
          id:uuid.v4(),
          title: 'Apples',
          category: 'Produce',
          done: true
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
    handleDoneItem(id){
     var done = this.state.done;
      // this.setState({done: !this.state.done});
      var style = {textDecoration: 'none'};
      // if (done === true) {
      //     style = {textDecoration: 'line-through'}
      // }
      let items = this.state.items;
      let index = items.find(x => x.id === id);
      console.log(index )
      // if(index('text-decoration') === 'none'){
      //   index('text-decloration', 'line-througn');
      // }

      // let isDone = item.find(function(item){
      //   let found = (item.id === id);
      //   console.log(found)

      // });
      // if(isDone === true){
      //   style = {textDecoration: 'line-through'}
      // }
      // done.push(index, 1);
      // this.setState({items:items});
      

      // 1 get id
      // 2 match id to items

    }  
render() {
  
    return (
      <div >
        <PageHeader >
        <h1 className='center'>Shopping List</h1>
        </PageHeader>
        <ShoppingList items={this.state.items} isDone={this.state.done} onDone={this.handleDoneItem.bind(this)} onDelete={this.handleDeleteItem.bind(this)}/>
        <Button bsSize="xsmall" bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}>
          Add
        </Button>
        <Panel collapsible expanded={this.state.open}>
        <AddToList addItem={this.handleItem.bind(this)}/>
        </Panel>
        <DoneList items={this.state.items} isDone={this.state.done} onDone={this.handleDoneItem.bind(this)} onDelete={this.handleDeleteItem.bind(this)}/>

      </div>
    );
  }
}

export default App;

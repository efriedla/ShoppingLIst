import React, { Component } from 'react';
import uuid from 'uuid';
// import $ from 'jquery';
import './App.css';
import {PageHeader,Panel,Button} from 'react-bootstrap';
import ShoppingList from './Components/ShoppingList';
import AddToList from './Components/AddToList';
import DoneList from './Components/DoneList';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        items: [],
        open: false,
        active: false,
        start: false,
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
    handleDeleteDoneItem(id){
      let done = this.state.done;
      let index = done.findIndex(x => x.id === id);
      done.splice(index, 1);
      this.setState({done:done});
    } 
    handleOnItem(id){
      var done = this.state.done;
      var style = {textDecoration: 'none'};
      let items = this.state.items;
      let index = done.find(x => x.id === id);
      let remove = done.findIndex(x => x.id === id);
      console.log("items before", items)
      console.log(" index before", index )
      console.log(" done before", done)
      items.push(index);
      
      
      done.splice(remove, 1);
      this.setState({items:items});
      this.setState({done:done});
      console.log("items after", items)
      console.log("index after", index )
      console.log("done after", done)
      
    }
    handleDoneItem(id){
     var done = this.state.done;
      var style = {textDecoration: 'none'};
    
      let items = this.state.items;
      let index = items.find(x => x.id === id);
      let remove = items.findIndex(x => x.id === id);
  
      done.push(index);
      
      
      items.splice(remove, 1);
      this.setState({items:items});
  
      console.log("items after", items)
      console.log("index after", index )
      console.log("done after", done)

    }  
render() {
  
    return (
      <div className='list'>
        <Button className='startButton' bsSize="small"  onClick={() => this.setState({ start: !this.state.start })}>
          Start
        </Button>
        <Panel className="list" collapsible expanded={this.state.start}>
        
        <PageHeader >
        <h1 className='center  '>Shopping List</h1>
        </PageHeader>
        <Button bsSize="xsmall" bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}>
          Add to List
        </Button>
        <ShoppingList className="list" items={this.state.items}  onDone={this.handleDoneItem.bind(this)} onDelete={this.handleDeleteItem.bind(this)}/>
       
        <Panel collapsible expanded={this.state.open}>
        <AddToList addItem={this.handleItem.bind(this)}/>
        </Panel>
        <DoneList items={this.state.done}  onDone={this.handleOnItem.bind(this)} onDelete={this.handleDeleteDoneItem.bind(this)}/>
        </Panel>
        
        <Footer />
      </div>
    );
  }
}

export default App;

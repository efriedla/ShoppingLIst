
import React, { Component } from 'react';
// import './Course.css';
import ShoppingListItem from './ShoppingListItem';
// import ShoppingListAdd from './ShoppingListAdd';
import {ListGroup} from 'react-bootstrap';

class ShoppingList extends Component {
  deleteItem(id){
      this.props.onDelete(id)
  }
  doneItem(id){
    this.props.onDone(id)
  }
        
  render() {
    //   console.log(this.props);
    // when passing state it is alway good to first see what your passing through
    // 2 map through 
    let shoppingListItems;
    if(this.props.items){
      shoppingListItems = this.props.items.map(item => {
        //console.log(items);
        return (
            <ShoppingListItem onDone={this.doneItem.bind(this)} onDelete={this.deleteItem.bind(this)} key={item.title} item={item} />
        );
      });
    }
    return (
      <div className='item '>
       
       <h4>Item</h4>
       <ListGroup>
       {shoppingListItems}
       </ListGroup>
       
      </div>
    );
  }
}

export default ShoppingList;

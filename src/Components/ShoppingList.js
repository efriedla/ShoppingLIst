
import React, { Component } from 'react';
// import './Course.css';
import ShoppingListItem from './ShoppingListItem';
// import ShoppingListAdd from './ShoppingListAdd';

class ShoppingList extends Component {
  deleteItem(id){
      this.props.onDelete(id)
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
            <ShoppingListItem onDelete={this.deleteItem.bind(this)} key={item.title} item={item} />
        );
      });
    }
    return (
      <div className='item'>
       <h1>My Shopping List</h1>
       <h4>Item</h4>
       <ul>
       {shoppingListItems}
       </ul>
       
      </div>
    );
  }
}

export default ShoppingList;

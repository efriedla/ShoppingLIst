import React, { Component } from 'react';
import './ShoppingList.css';



class ShoppingListItem extends Component {
    deleteItem(id){
        this.props.onDelete(id);
    }
          
    render() { 
        //the delete will get pushed up two componentes
      return (
        <li className='item'>
          {this.props.item.title}
           - 
          {this.props.item.category}
           <a href='#' 
              onClick={this.deleteItem.bind(this, this.props.item.id)}>
                   X 
          </a>
  
        </li>
      );
    }
  }

export default ShoppingListItem;

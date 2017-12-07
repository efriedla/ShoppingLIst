import React, { Component } from 'react';
import './ShoppingList.css';
import {ListGroupItem} from 'react-bootstrap';



class ShoppingListItem extends Component {
    deleteItem(id){
        this.props.onDelete(id);
    }
    doneItem(id){
        this.props.onDone(id);
        
    }
          
    render() { 
        //the delete will get pushed up two componentes
       
      return (
        <ListGroupItem className='item'>
         <a href='#' 
              onClick={this.doneItem.bind(this, this.props.item.id)}>
                  &#x2705;
          </a>
         <span >{this.props.item.title}
            - 
          {this.props.item.category}</span> 
          
           <a href='#' 
              onClick={this.deleteItem.bind(this, this.props.item.id)}>
                   X 
          </a>
  
        </ListGroupItem >
      );
    }
  }

export default ShoppingListItem;

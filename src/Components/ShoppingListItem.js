import React, { Component } from 'react';
import './ShoppingList.css';
import {ListGroupItem,ButtonToolbar} from 'react-bootstrap';



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
       
         <input type="checkbox"
              onClick={this.doneItem.bind(this, this.props.item.id)}
                  
          />
        
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

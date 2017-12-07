import React, { Component } from 'react';
import './ShoppingList.css';
// import {ListGroupItem} from 'react-bootstrap';



export default class Header extends Component {
  
          
    render() { 
        //the delete will get pushed up two componentes
       
      return (
        <div className="pageHead">
        <h1 className="center">Welcome to my React ShoppingList </h1>
        </div>
      );
    }
  }


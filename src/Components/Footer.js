import React, { Component } from 'react';
import './ShoppingList.css';
// import {ListGroupItem} from 'react-bootstrap';



class Footer extends Component {
  
          
    render() { 
        //the delete will get pushed up two componentes
       
      return (
        <div class="footer">This footer will always be positioned at the bottom of the page, but <strong>not fixed</strong>.
        </div>
      );
    }
  }

export default Footer;

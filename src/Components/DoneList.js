
import React, { Component } from 'react';
import './DoneList.css';
import DoneListItem from './DoneListItem';
// import DoneListAdd from './DoneListAdd';
import {ListGroup} from 'react-bootstrap';

class DoneList extends Component {
  deleteItem(id){
      this.props.onDelete(id)
  }
  onItem(id){
    this.props.onDone(id)
  }
        
  render() {
    //   console.log(this.props);
    // when passing state it is alway good to first see what your passing through
    // 2 map through 
    let doneListItems;
    if(this.props.items){
      doneListItems = this.props.items.map(item => {
        //console.log(items);
        return (
            <DoneListItem onDone={this.onItem.bind(this)} onDelete={this.deleteItem.bind(this)} key={item.title} item={item} />
        );
      });
    }
    return (
      <div className='item'>
       
       <h4>Items bought</h4>
       <ListGroup >
       {doneListItems}
       </ListGroup>
       
      </div>
    );
  }
}

export default DoneList;
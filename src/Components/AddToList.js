import React, { Component } from 'react';
import './ShoppingList.css';
import uuid from 'uuid';


class AddToList extends Component {
    constructor(){
        super()
        this.state = {
            newItem:{}
        }
    }
    static defaultProps = {
      categories: ['Dairy', 'Produce', 'Pantry','Sweets','Frozen']
  }
  handleSubmit(e){
      e.preventDefault();
    //   console.log(this.refs.title.value);
    if(this.refs.title.value === ''){
        alert('title is required');
    } else{
        this.setState({newItem:{
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }}, function(){
            // console.log(this.state);
            this.props.addItem(this.state.newItem);
        });
    }
  }      
  render() { 
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
          <h3>add new Item to Shopping List</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                  <label>Title</label><br/>
                  <input type='text' ref="title"/>
              </div>
              <div>
                  <label>Category</label><br/>
                  <select ref='category'>
                    {categoryOptions}
                  </select>
              </div>
              <input type='submit' value='Submit'/>
          </form>
      </div>
    );
  }
}


export default AddToList;

import React, { Component } from 'react';
import './ShoppingList.css';
import uuid from 'uuid';
import {Grid,Row,Col} from 'react-bootstrap';

class AddToList extends Component {
    constructor(){
        super()
        this.state = {
            newItem:{}
        }
    }
    static defaultProps = {
      categories: [' ','Dairy', 'Produce', 'Pantry','Sweets','Frozen']
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
      <Grid>
          <Row>
            <Col  xsOffset={2} md={8} mdOffset={5} >
                <h5>Add new Item to Shopping List</h5>
            </Col>
          </Row>
          <Row>
            <form inline onSubmit={this.handleSubmit.bind(this)}>
                <Col xs={6} md={5} mdOffset={3} >
                    {/* <label>Item</label><br/> */}
                    <input
                    type='text' ref="title"
                    placeholder = "item"
                    />
                </Col>
                <Col xs={6} md={4}>
                    <label>Category</label>
                    <select ref='category' placeholder="category">
                        {categoryOptions}
                    </select>
                </Col>
                <Col  xs={6} xsOffset={5}>
                    <input type='submit' value='Add'/>
                </Col>
            </form>
          </Row>
      </Grid>
    );
  }
}


export default AddToList;

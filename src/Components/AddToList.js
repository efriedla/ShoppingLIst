import React, { Component } from 'react';
import './ShoppingList.css';
import uuid from 'uuid';
import {Grid,Row,Col,Well,Panel} from 'react-bootstrap';

class AddToList extends Component {
    constructor(){
        super()
        this.state = {
            newItem:{}
        }
    }
    static defaultProps = {
      categories: ['','Dairy', 'Produce', 'Pantry','Sweets','Frozen']
  }
  handleSubmit(e){
      e.preventDefault();
    //   console.log(this.refs.title.value);
    if(this.refs.title.value === ''){
        alert('title is required');
    } else if(this.refs.category.value === ''){
        alert('category is required');
    }else{
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
          {/* <Row>
            <Col   md={8}  >
               <Well><h5 className='center'>Add new Item to Shopping List</h5></Well> 
            </Col>
          </Row> */}
          <Row>
           
            <form inline onSubmit={this.handleSubmit.bind(this)}>
                 <Col xs={9} md={5} mdOffset={3} >
                    <label>Item </label>
                    <input
                    type='text' ref="title"
                    placeholder = "Name"
                    />
                
                    <br/>
                    <label>Category </label>
                    <select ref='category' placeholder="category">
                        {categoryOptions}
                    </select>
                </Col>
            
                <Col  xs={3} md={4}>
                    <input bsSize="xsmall" bsStyle="primary" type='submit' value='+'/>
                </Col>
            </form>
            
          </Row>
          <hr/>
      </Grid>
    );
  }
}


export default AddToList;

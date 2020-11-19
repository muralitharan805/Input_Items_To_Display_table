import React, { Component } from 'react'
import { Button,Form } from 'react-bootstrap';

export class Formc extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleOnsubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" 
            name="Name" onChange={this.props.handleOnchange} value={this.props.datapass.Name}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Enter Age" 
            name="Age" onChange={this.props.handleOnchange} value={this.props.datapass.Age}/>
          </Form.Group> 
          <Form.Group controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City"
            name="City" onChange={this.props.handleOnchange} value={this.props.datapass.City} />
          </Form.Group> 
          <Button variant="primary" type="submit">
            {
              this.props.isCheck ? "Submit" : "Update"
            }
          </Button>
        </Form>
        
      </div>
    )
  }
}

export default Formc

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
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City Name" 
            name="City" onChange={this.props.handleOnchange} value={this.props.datapass.City}/>
          </Form.Group> 
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Age"
            name="Age" onChange={this.props.handleOnchange} value={this.props.datapass.Age} />
          </Form.Group> 
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
      </div>
    )
  }
}

export default Formc

import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap';

export class infotable extends Component {
  render() { 
    return (

     
      <div > 
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>City</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
      {
        this.props.getdata.map((ele,indec)=>{
          return (
            <tr key={indec.toString()}>
              <td>{ele.Name}</td>
              <td>{ele.City}</td>
              <td>{ele.Age}</td>
            </tr>
          )
        })
      }
  </tbody>
</Table>
      </div>
    )
  }
}

export default infotable

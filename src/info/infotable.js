import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap';

export class infotable extends Component {
  render() { 
    return (

     
      <div > 
        <Table striped bordered hover >
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
              <td>{ele.city}</td>
              <td>{ele.age}</td>
              <td><Button onClick={()=>this.props.handleUpdate(ele)}>Edite</Button></td>
              <td><Button onClick={()=>this.props.handleDelete(ele)}>Delete</Button></td>
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

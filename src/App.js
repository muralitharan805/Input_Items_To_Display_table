import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formc from './info/Formc'
import InfoTabe from './info/infotable'
import React from 'react'

class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      Name:"",
      City:"",
      Age:"",
      savadata:[],
    }

    this.handleOnchange=this.handleOnchange.bind(this)
    this.handleOnsubmit=this.handleOnsubmit.bind(this)
   }

   handleOnchange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
   }

   handleOnsubmit(e){
    e.preventDefault()
    const savadata = [...this.state.savadata]
    savadata.push({Name:this.state.Name,City:this.state.City,Age:this.state.Age})


    this.setState({
      savadata,
      Name:"",
      City:"",
      Age:""
    })

   console.log(this.state.savadata);
  
   }


  render(){
    return (     
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">

          <Formc datapass={this.state} handleOnchange={this.handleOnchange} 
          handleOnsubmit={this.handleOnsubmit}></Formc>
          </div>

          <div className="col-6">
          <InfoTabe getdata={this.state.savadata} ></InfoTabe>
          </div>
        </div>
      </div>
      );
  }
}

 

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formc from './info/Formc'
import InfoTabe from './info/infotable'
import React from 'react'
import axios from 'axios'

class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      _id:"",
      Name:"",
      Age:"",
      City:"",
      savadata:[],
      isCheck:true
    }

    this.handleOnchange=this.handleOnchange.bind(this)
    this.handleOnsubmit=this.handleOnsubmit.bind(this)
    this.getAll=this.getAll.bind(this)

    this.handleUpdate=this.handleUpdate.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
   }

   handleOnchange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
   }

   handleOnsubmit(e){
    e.preventDefault()
    // const savadata = [...this.state.savadata]
    // savadata.push({Name:this.state.Name,City:this.state.City,Age:this.state.Age})

    
      
      if(this.state.isCheck){
        const dobj = {
          Name:this.state.Name,
          age:this.state.Age,
          city:this.state.City,
        }
        
        axios.post('http://localhost:5000/info',dobj).then((res)=>{
          this.getAll()
        })    
      }else{
        const dobj = {
          Name:this.state.Name,
          age:this.state.Age,
          city:this.state.City,
          _id:this.state._id
        }
        console.log(dobj);
        axios.put('http://localhost:5000/info/update',dobj).then((res)=>{
        console.log(res); 
        this.getAll()
        })
      }
    this.setState({
      Name:"",
      City:"",
      Age:""
    })

  
   }

  componentDidMount(){
    this.getAll()
  }
  

   handleUpdate(e){
    console.log(e);
    this.setState({
      Name:e.Name,
      Age:e.age,
      City:e.city,
      _id:e._id,
      isCheck:false
    })
   }
   handleDelete(e){
    console.log(e);
    axios.delete('http://localhost:5000/info/del/'+e._id).then((res)=>{
        console.log(res); 
        this.getAll()
    })
   }
   getAll(){
    axios.get('http://localhost:5000/info').then((res)=>{
      this.setState({
        savadata : res.data,
       
      })
    })
   }
  render(){
    return (     
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">

          <Formc datapass={this.state} handleOnchange={this.handleOnchange} 
          handleOnsubmit={this.handleOnsubmit} isCheck={this.state.isCheck}></Formc>
          </div>

          <div className="col-6">
          <InfoTabe getdata={this.state.savadata}  handleUpdate={this.handleUpdate} 
          handleDelete={this.handleDelete}></InfoTabe>
          </div>
        </div>
      </div>
      );
  }
}

 

export default App;

import React from "react";

import {connect} from "react-redux"
import {getUserInfo} from '../Redux/RegRedux/actionCreators'
class RegForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      email:'',
      password:'',
username:'',
mobile:'',
description:''
    }
  }
  handleChange=(e)=>{
    const {name,value}=e.target
    this.setState({
      [name]:value
    })
  }
  
  render(){
    console.log(this.props)
    const {name,email,password,mobile,description,username}=this.state
    const {getData} =this.props
    return(
      <div >
        <input style={{margin:"10px",borderRadius:"5px",height:"35px",width:"250px"}}
        name="name" placeholder="Name"
          value={name}
onChange={this.handleChange}/><br/>
          <input style={{margin:"10px",borderRadius:"5px",height:"35px",width:"250px"}}
         name="email" placeholder="Email"
          value={email}
onChange={this.handleChange}/><br/>
<input style={{margin:"10px",borderRadius:"5px",height:"35px",width:"250px"}}
name="username" placeholder="Username"
          value={username}
onChange={this.handleChange}/><br/>
<input style={{margin:"10px",borderRadius:"5px",height:"35px",width:"250px"}}
name="password" placeholder="Password"
          value={password}
onChange={this.handleChange}/><br/>

<input style={{margin:"10px",borderRadius:"5px",height:"35px",width:"250px"}}
name="mobile" placeholder="Mobile No"
          value={mobile}
onChange={this.handleChange}/><br/>
<input style={{margin:"10px",borderRadius:"5px",height:"35px",width:"250px"}}
name="description" placeholder="Description"
          value={description}
onChange={this.handleChange}/><br/>
        <button style={{margin:"10px",backgroundColor:"rgb(34,84,354)",height:"40px",width:"250px",
color:"white",borderRadius:"18px"}}
        onClick={()=>getData({name,email,password,mobile,description,username})}>
            Register</button>
          
        </div>
    )
  }
}
const mapDispatchToProps=dispatch=>({
getData:(payload)=>dispatch(getUserInfo(payload))
})
export default connect (null,mapDispatchToProps)(RegForm)
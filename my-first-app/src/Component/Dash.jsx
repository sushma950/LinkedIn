import React from "react";
import { connect } from "react-redux";

const Dash =(props)=>{
  const {message,isLoading,isError,isAuth}=props
if(isLoading){
  return <h1 style={{color:"blue"}}>...Loading</h1>
}
if(isError){
  return <h1 style={{color:"red"}}>Something went Wrong</h1>
}
if(isAuth){
  console.log(message)
return(
  <div>
    <h2 style={{color:"green"}}>{message}</h2>
    </div>
)
}
return(
  <div>

    </div>
)
}

const mapStateToProps=(state)=>({
  message:state.reg.message,
    
  isLoading:state.reg.isLoading,
  isError:state.reg.isError,
  isAuth:state.reg.isAuth
  
})

export default connect(mapStateToProps)(Dash)
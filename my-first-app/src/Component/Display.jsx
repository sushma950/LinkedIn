import React from "react"
import { connect } from "react-redux"
import {Redirect} from "react-router-dom"
const Display=(props)=>{
    console.log(props)
    const {isLoading,isError,isAuth}=props
    if(isLoading){
        return <h1 style={{color:"blue"}}>...Loading</h1>
    }
    if(isError){
      return <h1 style={{color:"red"}}>Invalid Credentials</h1>
    }
    
    if(isAuth ){
        return <Redirect to='/dashboard' />
       
    }
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps=(state)=>({
    user:state.user,
    isAuth:state.isAuth,
    isLoading:state.isLoading,
    isError:state.isError
})

export default connect(mapStateToProps)(Display)
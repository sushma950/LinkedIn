import React from "react";
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
import Navbar from '../Component/Navbar'
import Dashboard from '../Component/Dashboard'

const PrivateRoutes=(props)=>{
  const {isAuth}=props
if(isAuth){
return(
  <div>
  
<Route to ='/dashboard'  render={()=><Navbar />}/>
 <Route path='/dashboard' exact render ={()=><Dashboard />}/>

    </div>
)
}
return (
  <div>
    </div>
)
}
const mapStateToProps=(state)=>({
isAuth:state.isAuth
})

export default connect(mapStateToProps)(PrivateRoutes)
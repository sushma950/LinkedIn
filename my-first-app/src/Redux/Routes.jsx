import React from "react"
import { Route } from "react-router-dom"
import Login from '../Component/LoginDisplay'
import PrivateRoutes from './PrivateRoutes'
// import Regdash from '../Component/Regdash'
const Routes=()=>{
    
return(
    <div>
        <Route path='/' exact render={()=><Login />}/>
        {/* <Route path='/' exact render={()=><Regdash />}/> */}
        <Route to = '/dashboard' exact render={()=><PrivateRoutes />}/>
    </div>
)
    
}



export default Routes
import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken, getUser } from '../service/Auth'

// const PublicRoute = ({component:Component,...rest}) => {
//   return (
//     <Outlet 
//         {...rest}
//         render={props=>{
//             return !getToken()?<Component {...props}/>
//             :<Navigate to={{pathname:'/premium-content'}}/>
//         }}
//     />
//   )
// }
const PublicRoute=({Component})=>{
    //console.log(Component)
    const auth=!getUser()
    console.log(auth)
    return auth?<Component/>:<Navigate to="/premium-content"/>
}
export default PublicRoute

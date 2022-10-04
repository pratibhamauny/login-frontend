import React from 'react'
import { Navigate} from 'react-router-dom'
import { getToken } from '../service/Auth'

// const PrivateRoute = ({component:Component,...rest}) => {
//     console.log(Component)
//   return (
//     <Outlet 
//         {...rest}
//         render={props=>{
//             return getToken()?<Component {...props}/>
//             :<Navigate to={{pathname:'/login'}}/>
//         }}
//     />
//   )
// }

const PrivateRoute=({Component})=>{
    //console.log(Component)
    const auth=getToken();
    //console.log(auth)
    return auth?<Component/>:<Navigate to="/login"/>
}
export default PrivateRoute

import React from 'react'
import {getUser,resetUserSession} from "../service/Auth"
import { useNavigate } from 'react-router-dom'
const PremiumContent = (props) => {
  const navigate=useNavigate()
  const user=getUser()
  const name=user!=='undefined'&&user?user.username:'';

  const logoutHandler=()=>{
    resetUserSession()
    navigate('/login')
  }
  //console.log(user)
  return (
    <div>
      <h2>Hello {name} !You have been logged in!!! Welcome to the premium content.</h2>
      <p><button onClick={logoutHandler}>Logout</button></p>
    </div>
  )
}

export default PremiumContent

import axios from 'axios'
import React,{useState}from 'react'
import { setUserSession } from '../service/Auth'
import { useNavigate } from 'react-router-dom'
const Login = (props) => {
    const navigate=useNavigate();
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [errorMsg,setErrorMsg]=useState(null)

    const submitHandler=(e)=>{
        e.preventDefault();
        
        if(!username||!password){
            setErrorMsg('Both username and password are required!')
            return;
        }
        setErrorMsg(null)
        const requestBody={username,password}
       // console.log(requestBody)
        axios.post('https://qog1hea9qj.execute-api.us-west-1.amazonaws.com/prod/login',requestBody,{
            headers:{
                'x-api-key':'wX5hV1INCk8R3QaWAW5d56neeKxZhBU93jp62O2l'
            }
        }).then(response=>{
           console.log("response- ",response.data)
        setUserSession(response.data.user,response.data.token);
       // props.history.push('/premium-content')
        navigate('/premium-content')
        }).catch(error=>{
            //console.log("error - ",error.response.status)
            
            if(error.response.status===403 || error.response.status===401){
                setErrorMsg(error.response.data.message)
            }
            else{
                setErrorMsg('sorry...server is down,please try later.')
            }
        
        })
    }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
            <div><input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/></div>
            <div><input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
            <div><button>Login</button></div>
        </form>
        {errorMsg&&<p className='error'>{errorMsg}</p>}
    </div>
  )
}
export  default Login
 
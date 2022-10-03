import React,{useEffect, useState} from 'react'

const Register = () => {
   const [formValues,setFormValues]=useState({
    username:"",
    email:"",
    password:""
   })
   const [isSubmit,setIsSubmit]=useState(false)
   const [formErrors,setFormErrors]=useState({})
   
   const handlerChange=(e)=>{
   // console.log(e.target)
   const {name,value}=e.target
   setFormValues({...formValues,[name]:value})
   }
   const handlerSubmit=(e)=>{
       e.preventDefault()
       setFormErrors(validate(formValues))
       setIsSubmit(true)
    }

    useEffect(()=>{
       // console.log(formErrors)
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formValues)
        }
    },[formErrors])

    const validate=(values)=>{
        const errors={};
        const regex=/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/i;
        if(!values.username){
            errors.username="Username is required."
        }
        if(!values.email){
            errors.email="Email is required."
        }
        else if(!regex.test(values.email)){
            errors.email="Invalid email format."
        }
        if(!values.password){
            errors.password="Password is required."
        }
        else if(values.password.length<6){
            errors.password="Password must be more than 6 characters."
        }
        else if(values.password.length>12){
            errors.password="Password can not exceed more than 12 characters."
        }
        return errors
    }
   //console.log(formErrors.length)
   //console.log(formValues.username)
  return (
    <div>
    {Object.keys(formErrors).length===0 && isSubmit?<div className='signedIn'>Signed in successfully.</div>:null}
       <form onSubmit={handlerSubmit}>
       <h2>Create your account </h2>
        <div><input type="text" name="username" placeholder="Username" value={formValues.username} onChange={handlerChange}/></div>
        <p className='error'>{formErrors.username}</p>
        <div><input type="text" name="email" placeholder="Email" value={formValues.email} onChange={handlerChange}/></div>
        <p className='error'> {formErrors.email}</p>
        <div><input type="password" name="password" placeholder="Password" value={formValues.password} onChange={handlerChange}/></div>
        <p className='error'>{formErrors.password}</p>
     
        <div><button>Register</button></div>
       </form>
    </div>
  )
}
export default Register

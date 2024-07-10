import SubmitButton from "./SubmitButton"
import { useState } from "react"
import { createNewUser } from "../config/firebase"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const SignUp=()=>{
  const parentClass="flex flex-col relative h-28"
  const labelClass="p-1 absolute top-[-26px] left-5 bg-white text-4xl text-tomatoOrange font-mono"
  const inputClass="p-4 h-20 bg-white border border-tomatoOrange rounded-lg text-3xl font-extralight text-tomatoOrange font-mono focus:border-tomatoOrange focus:outline-none autofill-text-tomato"
  const [userCredential,setuserCredential]=useState({
    name:"",
    email:'',
    password:''
  })
  const navigate=useNavigate()
  const onSetupCred=(e)=>{
        //  console.log("listen",e.target)
         setuserCredential({
                              ...userCredential,...{[e.target.name]:e.target.value}
                            })

  }
  const handleSubmit=async (event)=>{
         event.preventDefault();
       try{
        await  createNewUser(userCredential)
        toast.success('SignUp Success!')
        navigateToProfile()
      }catch(error){
         console.log("Rejected Response",error.message)
         toast.success('Login failed!')
      }
  }
  const naviagtion=()=>{
    navigate('/login')
 }
 const navigateToProfile=()=>{
  navigate('/profile')
}
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="m-4 p-10 bg-white rounded-3xl shadow-red-800 shadow-2xl">
      <form onSubmit={handleSubmit} >
        <h1 className="mb-12 text-5xl text-center font-mono text-tomatoOrange">SignUp</h1>
       <div className={parentClass}>
       <label className={labelClass}>Username</label>
       <input className={inputClass} type="text" name="name" onChange={onSetupCred}></input>
       </div>
       <div className={parentClass}>
       <label className={labelClass}>Email</label>
       <input className={inputClass} type="email" name="email" onChange={onSetupCred} ></input>
       </div>
       <div className={parentClass}>
       <label className={labelClass}>Password</label>
       <input className={inputClass} type="password" name="password" onChange={onSetupCred}></input>
       </div>
       <div type="submit" className="flex flex-row-reverse">
       <SubmitButton data={{tag:"Sign Up"}}/>
       </div>
      </form>
      <div className="m-4 px-6 text-center text-2xl font-mono font-bold text-tomatoOrange">
       <button onClick={naviagtion}> Already have an account? Log in here! 🚀🚀</button>
       </div>
      </div>
    </div>
  )
}
export default SignUp
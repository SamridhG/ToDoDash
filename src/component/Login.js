import { useNavigate } from "react-router-dom"
import { currentUserState, loginExistingUser } from "../config/firebase"
import SubmitButton from "./SubmitButton"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
const Login=()=>{
  const parentClass="flex flex-col relative h-28"
  const labelClass="p-1 absolute top-[-26px] left-5 bg-white text-4xl text-tomatoOrange font-mono"
  const inputClass="p-4 h-20 bg-white border border-tomatoOrange rounded-lg text-3xl font-extralight text-tomatoOrange font-mono  focus:outline-none autofill-text-tomato"
  const navigate=useNavigate()
  const [componentmount,setcomponentmount]=useState(false)
  const authCred=useSelector((store)=>store.authSlice)
  const [loader,setLoader]=useState(false)
  useEffect(()=>{
        authCred.isLoggedIn && navigateToProfile();
        setcomponentmount(true)
              
  },[])
  const [userCredential,setuserCredential]=useState({
    email:'',
    password:''
  })
  const onSetupCred=(e)=>{
    setuserCredential({
        ...userCredential,...{[e.target.name]:e.target.value}
      })
  }
  const handleSubmit= async (event)=>{
         event.preventDefault();
         setLoader(true)
         if(userCredential.password.length===0 || userCredential.email.length===0){
          toast.warning('Wrong Credential!')
          setLoader(false)
          return
         }
         try{
           await loginExistingUser(userCredential)
           toast.success('Login Success!')
           navigateToProfile()
         }catch(error){
            console.log("Rejected Response",error.message)
            toast.success('Login failed!')
         }finally{
          setLoader(false)
         }
  }
 const naviagtionToSignUp=()=>{
    navigate('/signUp')
 }
 const navigateToProfile=()=>{
   navigate('/profile')
 }
 if (!componentmount)return (<></>) 
 return (
    <div className="min-h-screen flex  justify-center items-center">
        <div className="m-4 p-10 bg-white rounded-3xl shadow-red-800 shadow-2xl">
      <form onSubmit={handleSubmit} >
        <h1 className="mb-12 text-5xl text-center font-mono text-tomatoOrange">Login</h1>
       <div className={parentClass}>
       <label className={labelClass}>Email</label>
       <input className={inputClass} name="email" type="email" onChange={onSetupCred}></input>
       </div>
       <div className={parentClass}>
       <label className={labelClass}>Password</label>
       <input className={inputClass} name="password" type="password" onChange={onSetupCred}></input>
       </div>
       <div type="submit" className={`flex flex-row-reverse ${loader?'opacity-50 pointer-events-none' : '' }`} >
       <SubmitButton data={{tag:"Login"}}/>
       </div>
      </form>
      <div className="m-4 px-6 text-center text-2xl font-mono font-bold text-tomatoOrange">
       <button onClick={naviagtionToSignUp}>  New here? Join Us!! 🚀🚀</button>
       </div>
       </div>
    </div>
  )
}
export default Login
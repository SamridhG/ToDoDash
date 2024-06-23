import { useNavigate } from "react-router-dom"
import { currentUserState, loginExistingUser } from "../config/firebase"
import SubmitButton from "./SubmitButton"
import { useEffect, useState } from "react"
const Login=()=>{
  const parentClass="flex flex-col relative h-28"
  const labelClass="p-1 absolute top-[-26px] left-5 bg-white text-4xl text-tomatoOrange font-mono"
  const inputClass="p-4 h-20 bg-white border border-tomatoOrange rounded-lg text-5xl font-extralight text-tomatoOrange font-mono  focus:outline-none autofill-text-tomato"
  const navigate=useNavigate()
  const [alreadyLogin,isalreadyLogin]=useState(false)
  const [componentMount,iscomponentmount]=useState(false)
  useEffect(()=>{
         fetch() 
  },[])
  const fetch=async()=>{
   const response=await currentUserState(isalreadyLogin)
   iscomponentmount(true)
  }
  const [userCredential,setuserCredential]=useState({
    email:'',
    password:''
  })
  const onSetupCred=(e)=>{
    setuserCredential({
        ...userCredential,...{[e.target.name]:e.target.value}
      })
  }
  const handleSubmit=(event)=>{
         event.preventDefault();
         loginExistingUser(userCredential)
        // console.log("Response",userCredential)
  }
 const naviagtion=()=>{
    navigate('/signUp')
 }
//  useEffect(() => {
// alreadyLogin && navigate('/profile')
//   }, [alreadyLogin]);
//   // if unmount
//   if(!componentMount){
//     return ;
//   }
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
       <div type="submit" className="flex flex-row-reverse">
       <SubmitButton data={{tag:"Login"}}/>
       </div>
      </form>
      <div className="m-4 px-6 text-center text-2xl font-mono font-bold text-tomatoOrange">
       <button onClick={naviagtion}>  New here? Join Us!! 🚀🚀</button>
       </div>
       </div>
    </div>
  )
}
export default Login
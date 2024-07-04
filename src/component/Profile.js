import { useSelector } from "react-redux";
import { signOutAuth } from "../config/firebase";
import { useState } from "react";
const Profile=()=>{
  const userName=useSelector((store)=>store.authSlice.currentUserName)
  const [search,setSearch]=useState("")
    const onClick=()=>{
      signOutAuth()
    }
    const onWriteNote=(value)=>{
        setSearch(value)
    }
    return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="m-2 p-6 bg-white rounded-3xl shadow-red-800 shadow-2xl">
           <div className="text-center mb-10 p-2 font-mono font-semibold text-gray-700 text-4xl">Hey {userName}</div>
           <div className="flex">
            <input className="p-3 w-[500px] h-[60px] text-4xl outline-none text-center font-mono" type="text" placeholder="Write Your Note Here" value={search} onChange={(e)=>{
                   onWriteNote(e.target.value);
           }}>
           </input>
           <button className="p-3 w-14 h-[60px] text-3xl text-center bg-tomatoOrange font-bold rounded-md">+</button>
           </div>
      </div>
    </div>
    )
} 
export default Profile;
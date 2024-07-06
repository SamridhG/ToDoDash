import { useSelector } from "react-redux";
import { signOutAuth,createList, getTodoList } from "../config/firebase";
import { useEffect, useState } from "react";
import Note from "./Note";
const Profile=()=>{
  const userName=useSelector((store)=>store.authSlice.currentUserName)
  const listContent=useSelector((store)=>store.listSlice.list)
  const [search,setSearch]=useState("")
    const onClick=()=>{
      signOutAuth()
    }
    const onWriteNote=(value)=>{
        setSearch(value)
    }
    const onClickAdd=()=>{
      createList(search)
      setSearch("")
    }
    useEffect(()=>{
      getTodoList()
    },[])
    return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="m-2 p-6 bg-white rounded-3xl shadow-red-800 shadow-2xl">
           <div className="text-center mb-10 p-2 font-mono font-semibold text-gray-700 text-4xl ">Hey {userName}</div>
           <div className="p-3 flex rounded-lg shadow-gray-500 shadow-lg">
            <input className="p-3 w-[500px] h-[60px] text-4xl outline-none  font-mono " type="text" placeholder="Write Your Note Here" value={search} onChange={(e)=>{
                   onWriteNote(e.target.value);
           }}>
           </input>
           <button className="p-3 w-14 h-[60px] text-3xl text-center bg-tomatoOrange font-bold rounded-md" onClick={onClickAdd}>+</button>
           </div>
           {listContent.length>0 ?  <div className="py-2 mt-6  rounded-lg shadow-gray-500 shadow-lg">
            <ul className="p-3 w-[560px] max-h-[600px] overflow-y-auto hide-scrollbar">
            {listContent.map((element)=>(
             <li key={element.id}><Note detail={element}/></li>
            ))}
           </ul>
           </div>:<></>}
      </div>
    </div>
    )
} 
export default Profile;
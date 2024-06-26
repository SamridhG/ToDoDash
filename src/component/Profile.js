import { useSelector } from "react-redux";
import { signOutAuth } from "../config/firebase";
const Profile=()=>{
  const userName=useSelector((store)=>store.authSlice.currentUserName)
    const onClick=()=>{
      signOutAuth()
    }
    return (
     <div><button onClick={onClick}className="bg-white text-tomatoOrange text-4xl">{userName}  LOGOUT</button></div>   
    )
} 
export default Profile;
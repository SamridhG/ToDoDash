import { signOutAuth } from "../config/firebase";
const Profile=()=>{
    const onClick=()=>{
      signOutAuth()
    }
    return (
     <div><button onClick={onClick}className="bg-white text-tomatoOrange text-4xl">LOGOUT</button></div>   
    )
} 
export default Profile;
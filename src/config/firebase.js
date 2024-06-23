// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { getFirestore,collection,addDoc,setDoc,doc,getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3DN-RxV0eC169O6HaD4KhWYm46LJUTKM",
  authDomain: "to-do-dash.firebaseapp.com",
  projectId: "to-do-dash",
  storageBucket: "to-do-dash.appspot.com",
  messagingSenderId: "835892971200",
  appId: "1:835892971200:web:3963695d0f872de156cf25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// register new user
const registerUser=async (data)=>{
    const {uid,name,email}=data
   try{
    // here we creating new doc
     const response=await setDoc(doc(db, `registerUser/${uid}`), data);
     // Set the data in the document with the uid
     console.log("register response",response)
   }catch(error){
    console.log("RegisterUser error",error)
   }
}

// create new User
export const createNewUser=async (data)=>{
    const {name,email,password}=data
    try{
        const response=await createUserWithEmailAndPassword(auth, email, password)
        console.log("response",response,response.user.uid)
        registerUser({...data,...{uid:response.user.uid}})
    }catch(error){
       console.log("error in createUser",error.code,error.message)
    }
}
const getUserCredential=async (data)=>{
    try{
        const docRef = doc(db, "registerUser", data);
        const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}


    }catch(error){
        console.log("error geting user cred",error)
    }
}
// login User
export const loginExistingUser=async(data)=>{
    const {email,password}=data
   try{
       const response=await signInWithEmailAndPassword(auth, email, password)
       console.log("login response",response,response.user.uid)
       const uid=response.user.uid;
       getUserCredential(uid)
   }catch(error){
    console.log("Sign In Error",error)
   } 
}

export const currentUserState=(setisAlreadyLoggin)=>{
   return new Promise((res,rej)=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          getUserCredential(uid)
          console.log("USER LOGG")
          setisAlreadyLoggin(true)
          res("exist user")
          // ...
        } else {
          // User is signed out
          // ...
          setisAlreadyLoggin(false)
          res("Not Exist user")
        }
      });
   }) 
}
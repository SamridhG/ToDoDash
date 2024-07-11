// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged, signOut} from "firebase/auth";
import { getFirestore,collection,addDoc,setDoc,doc,getDoc,deleteDoc, getDocs,query,onSnapshot } from "firebase/firestore";
import { initAuthData } from "../store/authSlice";
import { updatelist } from "../store/listSlice";
import appStore from "../store/appStore";
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
export const createNewUser=(data)=>{
  const {name,email,password}=data
  return new Promise(async (res,rej)=>{
    try{
        const response=await createUserWithEmailAndPassword(auth, email, password)
        console.log("response",response,response.user.uid)
         await registerUser({...data,...{uid:response.user.uid}})
         res("Success")
    }catch(error){
       console.log("error in createUser",error.code,error.message)
       rej("Rejected")
    }
  })
}
const getUserCredential=async (data)=>{
    try{
        const docRef = doc(db, "registerUser", data);
        const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data=docSnap.data()
           appStore.dispatch(initAuthData({
              currentUserName:data.name,
              currentUserEnail:data.email,
               userUID:data.uid,
               isLoggedIn:true,
               isFireBaseInitilize:true
            }))
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
export const loginExistingUser=(data)=>{
    const {email,password}=data
    return new Promise(async (res,rej)=>{
      try{
        const response=await signInWithEmailAndPassword(auth, email, password)
        console.log("login response",response,response.user.uid)
        const uid=response.user.uid;
        await getUserCredential(uid)
        res("resolve")
    }catch(error){
     console.log("Sign In Error",error)
     rej(error)
    } 
    })
}
onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log("Already Logged In")
          getUserCredential(uid)
          // ...
        } else {
          // User is signed out
          // ...
          console.log("Logged Out")
          appStore.dispatch(initAuthData({
              currentUserName:null,
              currentUserEnail:null,
               userUID:null,
               isLoggedIn:false,
               isFireBaseInitilize:true
          }))
        }
        //Check Is FireBaseInitilize
       // !appStore.getState().authSlice.isFireBaseInitilize && appStore.dispatch(initAuthData({
          
    //  }))
      });

export const signOutAuth= async ()=>{
  try{
    const data= await signOut(auth)
    console.log("SignOut Data",data)
  }catch(error){}
   
}
export const createList=async (note)=>{
  try {
    let data={
      notetag:note,
      id:generateUniqueId()
    }
    const response=await setDoc(doc(db, `registerUser/${appStore.getState().authSlice.userUID}/ToDoContent/${data.id}`), data);
    console.log('Document successfully written!');
  } catch (e) {
    console.error('Error writing document: ', e);
  }
}
const generateUniqueId=()=>{
  const timestamp = Date.now().toString(36); // Convert the current timestamp to a base-36 string
  const randomString = Math.random().toString(36).substring(2, 6); // Generate a random string and get the first 4 characters

  return (timestamp + randomString).substring(0, 8); // Concatenate and get the first 8 characters
}
export const deleteNote=async (docId)=>{
    try {
      // Reference to the document to be deleted
      const docRef = doc(db, `registerUser/${appStore.getState().authSlice.userUID}/ToDoContent`, docId);
      // Delete the document
      await deleteDoc(docRef);
      console.log(`Document with ID ${docId} successfully deleted from collection`);
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  }
export const getTodoList=async ()=>{
  // here we use listner , real time listner for change in collection
          const  docRef=collection(db,`registerUser/${appStore.getState().authSlice.userUID}/ToDoContent`)
          onSnapshot(docRef,(querySnapshot)=>{
           let newlist=[]
          querySnapshot.forEach((doc)=>{
             console.log("doc===>",doc.data())
             newlist.push(doc.data())
          })
          appStore.dispatch(updatelist(newlist))
         })
}  


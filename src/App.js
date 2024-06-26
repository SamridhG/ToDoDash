import { useEffect, useState } from 'react';
import './App.css';
import Login from './component/Login';
import SignUp from './component/SignUp';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Profile from './component/Profile';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
   const parentClass="bg-gradient-to-br from-lightTomatoOrange to-tomatoOrange min-h-screen"
   const initFireBase=useSelector(store=>store.authSlice.isFireBaseInitilize)
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signUp',
      element:<SignUp/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ])
  return (
    <div className={parentClass}>
      {initFireBase ? <RouterProvider router={appRouter}/>:<Splash/>}
      <ToastContainer/>
    </div>
  )
}
const Splash=()=>{
  return (
    <div className='min-h-screen flex  justify-center items-center'><div className='p-2 m-2 bg-white text-tomatoOrange font-mono text-6xl border-2 rounded-xl'>Let's Go</div></div>
  )
}
export default App;

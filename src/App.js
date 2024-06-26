import { useEffect, useState } from 'react';
import './App.css';
import Login from './component/Login';
import SignUp from './component/SignUp';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Profile from './component/Profile';
import { useSelector } from 'react-redux';

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
      {initFireBase && <RouterProvider router={appRouter}/>}
    </div>
    
  )
}

export default App;

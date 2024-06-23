import { useEffect, useState } from 'react';
import './App.css';
import Login from './component/Login';
import SignUp from './component/SignUp';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';

function App() {
   const parentClass="bg-gradient-to-br from-lightTomatoOrange to-tomatoOrange min-h-screen"
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
      element:<div>Profile Page</div>
    }

  ])
  return (
    <div className={parentClass}>
      <RouterProvider router={appRouter}/>
    </div>
    
  )
}

export default App;

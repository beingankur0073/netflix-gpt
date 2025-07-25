import React, { useEffect } from 'react'
import Login from './Login.js'
import Browse from './Browse.js'
import {  createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'


const Body = () => {
    
 

    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])



  return (
    <div>
        <RouterProvider  router={appRouter}/>      
    </div>
  )
}

export default Body
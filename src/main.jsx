import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/login';
import MenuAdministrador from './pages/MenuAdministrador';
import Principal from './pages/Principal';



const router = createBrowserRouter([
{
  path: '/inicio',
  element: <Layout/>,
  children: [
    {
      index: true,
      element:<MenuAdministrador/>
    }
  ]
},  
{
  path:"/",
  element:<Principal/>,
  children:[{
  index: true,
  element:<Login/>

  }]
  

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>  
  </React.StrictMode>,
)

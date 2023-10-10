import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/Login';
import Principal from './pages/Principal';
import RegistroDeUsuarios from './pages/RegistroDeUsuarios';
import Usuarios from "./components/TablaUsuarios"
import ControlVentas from './components/ControlVentas';


const router = createBrowserRouter([
{
  path: '/inicio',
  element: <Layout/>,
  children: [
    {
      index: true,
      element:<RegistroDeUsuarios/>
    },
    {
      path:'usuarios',
      element:<Usuarios/>
    },
    {
      path:'ControlDeVentas',
      element:<ControlVentas/>

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

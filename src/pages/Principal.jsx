import { Outlet } from "react-router-dom"
import '../styles/Login.css'
import Footer from "../components/Footer"


function Principal() {
  return (
    <div>
     <Outlet/>
     <Footer/>
    </div>
   
  )
}

export default Principal
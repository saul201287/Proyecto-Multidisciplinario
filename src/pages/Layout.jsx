import { Outlet, useLocation } from "react-router-dom";
import "../styles/Administrador.css";
import Nav from "../components/NavbarAdministrador";
import Footer from "../components/Footer";
import Animaciones from "./Animaciones";

function Layout() {
  const location = useLocation();

  return (
    <body>
       <Animaciones>
      <Nav />
      <Outlet />
      <Footer/>
       </Animaciones>
    </body>
  );
}

export default Layout;

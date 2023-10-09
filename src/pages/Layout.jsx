import { Outlet, useLocation } from "react-router-dom";
import "../styles/MenuAdministrador.css";
import Nav from "../components/Nav";
function Layout() {
  const location = useLocation();

  return (
    <body>
      <Nav />
      <Outlet />
    </body>
  );
}

export default Layout;

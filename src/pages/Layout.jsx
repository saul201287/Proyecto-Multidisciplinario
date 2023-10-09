import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  
  return (
    <body>
     
       <Outlet />


    </body>
  );
}

export default Layout;

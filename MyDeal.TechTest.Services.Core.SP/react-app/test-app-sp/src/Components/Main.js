import { Outlet, Link } from "react-router-dom";
import React from "react";
import '../App.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="ul-horizontal-list">
        <li className="ul-horizontal-list-li">
            <Link className="list-content"  to="/MyDeal">MyDeal</Link>
          </li> 
          <li className="ul-horizontal-list-li">
            <Link className="list-content" to="/">Home</Link>
          </li>                   
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{props.title}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/collections">All My Notes</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

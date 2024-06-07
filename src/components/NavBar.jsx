import React from "react";

function NavBar() {
  return (
    <div>
      <div className="navbar text-white bg-gray-800">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Photo-Editor</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Collage</a>
            </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

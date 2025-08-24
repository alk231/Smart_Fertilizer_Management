import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";

function NavBar({ toggleSideBar }) {
  return (
    <div className="bg-green-700 flex fixed top-0 left-0 w-full items-center justify-between p-3 z-50">
      {/* Left side: Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-14 object-contain"
        />
      </div>

      {/* Right side: Menu */}
      <div className="flex items-center ">
        <MenuIcon
          className="text-white cursor-pointer "
          onClick={toggleSideBar}
        />
      </div>
    </div>
  );
}

export default NavBar;

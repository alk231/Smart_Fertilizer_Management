import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from './Sidebar';

function NavBar({toggleSideBar}) {

  return (
    <div className=" bg-green-700 flex fixed top-0 left-0 w-full items-center p-3 z-50">
      <div>
        <MenuIcon className="text-white cursor-pointer" onClick={toggleSideBar} />
      </div>
      <div className="flex items-center justify-center text-white text-2xl">
        
      </div>
    </div>
  );
}

export default NavBar;
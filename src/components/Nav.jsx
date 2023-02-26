import React from "react";

const Nav = () => {

    return (
        <nav className="bg-gray-800 px-4 py-2 rounded-sm shadow-md">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white hover:text-gray-300 font-mono font-bold text-xl">Open Source Community Board</a>
          <div className="flex flex-wrap items-center">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">About</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>
      
    );
    }

export default Nav;
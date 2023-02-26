import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-4 p-4 mt-auto rounded-sm shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">© 2023 Matthieu Felker. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-white">GitHub</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
           
          </ul>
        </div>
      </footer>
    );

}

export default Footer;
import { Icon } from "@iconify/react";
import React from "react";
import Socials from "./Socials";

// an about section for the website telling the user what the website is about
const About = () => {
    return (
        <div>
        <header className="grid grid-cols-1 sm:grid-cols-2 py-10 drop-shadow-md rounded-md">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-4">
            <h1 className="text-3xl font-bold drop-shadow-lg text-gray-900">
      <Icon className="inline-block align-baseline" icon="fluent-mdl2:open-source" width="40" />
              About Us
            </h1>
            <p className="mt-2 text-gray-900 sm:w-full">
              Welcome, this is an open source project that is in development! We are looking to create a community board for open source projects. Currently we are looking for contributors to help us build this project. If you are interested in contributing, please star and follow the repo here on <a href="#" className="text-blue-500 hover:text-blue-700">GitHub</a>!
            </p>
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-4">
            <h1 className="text-3xl font-bold drop-shadow-lg text-gray-900">    
                <Icon className="inline-block align-baseline" icon="fluent:people-community-24-filled" width="40" />
                Community
            </h1>
            <p className="mt-2 text-gray-900 sm:w-full">

            This community is for people who are seeking to contribute to open source projects. If you are a project owner, you can post your project and if you are a contributor, you can find projects to contribute to.

   

            </p>

            <Socials />
            </div>
       
        </header>
      
      </div>
      


    )

}

export default About;
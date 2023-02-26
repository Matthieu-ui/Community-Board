import { Icon } from "@iconify/react";
import React from "react";
import Socials from "./Socials";

// an about section for the website telling the user what the website is about
const About = () => {
    return (
        <div>
        <header class="py-10 mt-4 drop-shadow-md rounded-md bg-slate-200 grid grid-cols-2">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold drop-shadow-lg text-gray-900">
      <Icon className="inline-block align-baseline" icon="fluent-mdl2:open-source" width="40" />
              About Us
            </h1>
            <p class="mt-2 text-gray-900 sm:w-full">
              Welcome, This is an open source project that is in development! We are looking to create a community board for open source projects. Currently we are looking for contributors to help us build this project. If you are interested in contributing, please star and follow the repo here on <a href="#" class="text-blue-500 hover:text-blue-700">GitHub</a>!
            </p>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold drop-shadow-lg text-gray-900">    
                <Icon className="inline-block align-baseline" icon="fluent:people-community-24-filled" width="40" />
                Community
            </h1>
            <p class="mt-2 text-gray-900 sm:w-full">

            This community is for people who are seeking to contribute to open source projects. If you are a project owner, you can post your project and if you are a contributor, you can find projects to contribute to.

   

            </p>

            <Socials />
            </div>
       
        </header>
      
      </div>
      


    )

}

export default About;
import React from "react";
import { Icon } from "@iconify/react";

const Socials = () => {
    return (
        <div className="flex flex-wrap">
        <div className="w-full">
            <div className="text-left pr-5 p-2">
            <h2 className="text-cyan-900 text-sm font-medium text-center">
                Connect with us!
            </h2>
    
           <div className="text-center space-x-3">
                <a
                className=" hover:text-gray-500"
                href="#"><Icon
                    className="inline-block align-baseline"
                    icon="mdi:github"   
                    width="27"/>
                </a>
                <a
                className=" hover:text-gray-500"
                href="#"><Icon
                    className="inline-block align-baseline"
                    icon="ic:twotone-discord"   
                    width="27"/>
                </a>
                <a
                className=" hover:text-gray-500"
                href="#"><Icon
                    className="inline-block align-baseline"
                    icon="material-symbols:logo-dev-outline"   
                    width="27"/>
                </a>
                <a
                className=" hover:text-gray-500"
                href="#"><Icon
                    className="inline-block align-baseline"
                    icon="mdi:twitter-circle"   
                    width="27"/>
                </a>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Socials;

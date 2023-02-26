import React from "react";
import { Icon } from '@iconify/react';

const Post = (props) => {
    return (
        <div className="flex flex-wrap relative border-5 border-cyan-900 hover:scale-105 cursor-pointer transition-transform">
            <div className="w-full">
                <div className="rounded-lg shadow-lg p-4 bg-zinc-200 h-full" >
                    <h2 className="text-cyan-900  py-2 text-lg font-medium mb-2">{props.title}</h2>

                    <p className="text-sm pb-4">{props.content}</p>
            
                    <div className="flex flex-wrap absolute bottom-0 contents">
                        <a className=" hover:text-gray-500" href="#" ><Icon className="inline-block align-baseline" icon="mdi:github" width="30" /></a>
                        <a className=" hover:text-gray-500" href="#" ><Icon className="inline-block align-baseline" icon="ri:eye-2-line" width="30" /></a>

                        {/* This section renders the author name, date, and status of each post using props */}

                    <div className="text-right">
                            <span className="text-sm font-bold font-serif px-2">{props.author}</span>
                            <span className="text-xs">{props.date}</span>
                            <br />

                            <span className={`px-2 ${props.status === 'Active' ? 'text-green-700 font-bold font-mono  drop-shadow-lg' : props.status === 'Inactive' ? 'text-red-500 font-bold font-mono drop-shadow-lg' : 'bg-red-500 text-white'}`}>{props.status}</span>
                            </div>


                        

                    </div>
                </div>
            </div>
        </div>



    );

}

export default Post;


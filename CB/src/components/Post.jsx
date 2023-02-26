import React from "react";
import { Icon } from '@iconify/react';

const Post = (props) => {
    return (
        <div className="flex flex-wrap">
        <div className="
        w-full
 

        
        ">
        <div className="rounded-lg shadow-lg p-4 bg-zinc-200 " >
                <h2 className="text-cyan-900 hover:text-cyan-600  py-2 text-lg font-medium mb-2">{props.title}</h2>
                <p className="text-sm pb-4">{props.content}</p>
                <div className="flex-1 text-right">
                    <span className="text-sm font-bold font-serif px-2">{props.author}</span>
                    <span className="text-xs">{props.date}</span>
                    <br/>
                    <span className={`px-2 ${props.status === 'Active' ? 'text-green-700 font-bold font-mono  drop-shadow-lg' : props.status === 'Inactive' ? 'text-red-500 font-bold font-mono drop-shadow-lg' : 'bg-red-500 text-white'}`}>{props.status}</span>
                    <Icon icon="mdi:github"  width="24" />
                    <Icon icon="ri:eye-2-line" width="24"/>
                   
                </div>
            </div>
        </div>
        </div>

        

    );

}

export default Post;


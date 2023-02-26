import React from "react";
import Post from "./Post";


    const posts = [
        {
            title: "GifMe",
            content: "A JavaScript library that allows users to easily add GIFs to their web pages. This library is built on top of the Giphy API and provides a simple interface for searching and displaying GIFs.",
            author: "John Doe",
            date: "2021-01-01",
            status: "Active"
        },
        {
            title: "JSMap",
            content: "A lightweight and customizable JavaScript library for creating interActive maps on web pages. Uses Leaflet API and provides a simple interface for creating and customizing maps.",
            author: "Sarah Loe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "JSPlot",
            content: "A JavaScript library that makes it easy to create dynamic and responsive data visualizations on web pages. Uses D3.js library for a simple interface for creating and customizing charts.",
            author: "Sam Poe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "JSGame",
            content: "A JavaScript game engine that provides a powerful and flexible framework for building browser-based games. ",
            author: "Jane Koe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "JSAuth",
            content: " lightweight and secure authentication library for JavaScript-based web applications. Customized authentication!!",
            author: "Mary Roe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "JSChat",
            content: "A JavaScript-based chat application that enables real-time messaging and collaboration between users.",
            author: "Mike Zoe",
            date: "2023-02-25",
            status: "Inactive"
        },
        {
            title: "JSGame",
            content: "A JavaScript game engine that provides a powerful and flexible framework for building browser-based games. ",
            author: "Jane Koe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "JSAuth",
            content: " lightweight and secure authentication library for JavaScript-based web applications. Customized authentication!!",
            author: "Mary Roe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "JSChat",
            content: "A JavaScript-based chat application that enables real-time messaging and collaboration between users.",
            author: "Mike Zoe",
            date: "2023-02-25",
            status: "Inactive"
        },
        {
            title: "JSGame",
            content: "A JavaScript game engine that provides a powerful and flexible framework for building browser-based games. ",
            author: "Jane Koe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "JSAuth",
            content: " lightweight and secure authentication library for JavaScript-based web applications. Customized authentication!!",
            author: "Mary Roe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "JSChat",
            content: "A JavaScript-based chat application that enables real-time messaging and collaboration between users.",
            author: "Mike Zoe",
            date: "2023-02-25",
            status: "Inactive"
        }

    ];

    const PostList = () => {
    return (
     
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 pb-4">

    
                {posts.map((post, index) => (
                    <div className="border border-cyan-900 h-full">
                    <Post
                        key={index}
                        title={post.title}
                        content={post.content}
                        author={post.author}
                        date={post.date}
                        status={post.status}
                        
                    />
                    </div>
                    ))}
                    
            </div>
        
    );
}

export default PostList;
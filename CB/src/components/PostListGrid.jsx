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
            title: "Zest",
            content: "A lightweight JavaScript library for creating animations and transitions on web pages.",
            author: "Brian doe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "Quizzer",
            content: "An open source quiz platform that allows users to create and take quizzes on any topic.",
            author: "Mary Roe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "QuickDocs",
            content: " An easy-to-use documentation generator for JavaScript projects, that generates beautiful, responsive documentation websites.",
            author: "Jane Koe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "PureForms",
            content: "A library of customizable and easy-to-use form components for building beautiful and functional forms on the web.",
            author: "Mary Roe",
            date: "2023-02-25",
            status: "Active"
        },
        {
            title: "Dash",
            content: "A JavaScript-based dashboard framework for building real-time data visualizations and interactive dashboards.",
            author: "Mike Zoe",
            date: "2023-02-25",
            status: "Inactive"
        },
        {
            title: "LocalChat",
            content: "A real-time chat application built using JavaScript, Node.js, and WebSockets, that allows users to chat with others in their local area.",
            author: "Mike Zoe",
            date: "2023-02-25",
            status: "Inactive"
        },
        {
            title: "JSChat",
            content: "A JavaScript-based chat application that enables real-time messaging and collaboration between users.",
            author: "Mike Zoe",
            date: "2023-02-25",
            status: "Inactive"
        },

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
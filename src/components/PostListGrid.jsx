import React from "react";
import Post from "./Post";


// post objects are passed as props to the PostListGrid component and rendered as a grid of cards

    const posts = [
        {
            title: "GifMe",
            content: "A JavaScript library that allows users to easily add GIFs to their web pages. This library is built on top of the Giphy API and provides a simple interface for searching and displaying GIFs.",
            author: "John Doe",
            date: "2021-01-01",
            status: "Active",
            tags: ["JavaScript", "Giphy API", "GIFs"]
        },
        {
            title: "JSMap",
            content: "A lightweight and customizable JavaScript library for creating interActive maps on web pages. Uses Leaflet API and provides a simple interface for creating and customizing maps.",
            author: "Sarah Loe",
            date: "2023-02-25",
            status: "Active",
            tags: ["JavaScript", "Leaflet API", "Maps"]
        },
        {
            title: "JSPlot",
            content: "A JavaScript library that makes it easy to create dynamic and responsive data visualizations on web pages. Uses D3.js library for a simple interface for creating and customizing charts.",
            author: "Sam Poe",
            date: "2023-02-25",
            status: "Active",
            tags: ["JavaScript", "D3.js", "Charts"]
        },
        {
            title: "JSGame",
            content: "A JavaScript game engine that provides a powerful and flexible framework for building browser-based games. Customizable and easy-to-use game engine for building games on the web.",
            author: "Jane Koe",
            date: "2023-02-25",
            status: "Active",
            tags: ["JavaScript", "Game Engine", "Games"]
        },
        {
            title: "JSAuth",
            content: " lightweight and secure authentication library for JavaScript-based web applications. Customized authentication and authorization for your web applications. Lightweight and secure.",
            author: "Mary Roe",
            date: "2023-02-25",
            status: "Active",
            tags: ["JavaScript", "Authentication", "Authorization"]
        },

        {
            title: "Zest",
            content: "A lightweight JavaScript library for creating animations and transitions on web pages. Uses the GSAP library for a simple interface for creating and customizing animations.",
            author: "Brian doe",
            date: "2023-02-25",
            status: "Active",
            tags: ["JavaScript", "GSAP", "Animations"]
        },
        {
            title: "Quizzer",
            content: "An open source quiz platform that allows users to create and take quizzes on any topic. This platform is built using JavaScript, Node.js, and MongoDB.",
            author: "Mary Roe",
            date: "2023-02-25",
            status: "Active",
            tags: ["JavaScript", "Node.js", "MongoDB"]
        },
        {
            title: "QuickDocs",
            content: " An easy-to-use documentation generator for JavaScript projects, that generates beautiful, responsive documentation websites.",
            author: "Jane Koe",
            date: "2023-02-25",
            status: "Active",
            tags: ["JavaScript", "Documentation", "Documentation Generator"]
        },
        {
            title: "PureForms",
            content: "A library of customizable and easy-to-use form components for building beautiful and functional forms on the web.",
            author: "Mary Roe",
            date: "2023-02-25",
            status: "Active",
            tags: ["JavaScript", "Forms", "Form Components"]
        },
        {
            title: "Dash",
            content: "A JavaScript-based dashboard framework for building real-time data visualizations and interactive dashboards.",
            author: "Mike Zoe",
            date: "2023-02-25",
            status: "Inactive",
            tags: ["JavaScript", "Dashboard", "Data Visualization"]
        },
        {
            title: "LocalChat",
            content: "A real-time chat application built using JavaScript, Node.js, and WebSockets, that allows users to chat with others in their local area.",
            author: "Mike Zoe",
            date: "2023-02-25",
            status: "Inactive",
            tags: ["JavaScript", "Node.js", "WebSockets"]
        },
        {
            title: "JSChat",
            content: "A JavaScript-based chat application that enables real-time messaging and collaboration between users. Uses Node.js and WebSockets for real-time communication.",
            author: "Mike Zoe",
            date: "2023-02-25",
            status: "Inactive",
            tags: ["JavaScript", "Node.js", "WebSockets"]
        },

    ];

    const PostList = () => {
    return (
    
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 pb-4">

                {/* map() method loops through an array of posts and render a Post component for each item in the array. Post is the current item being processed and index is the index of the current item in the array */}

                {posts.map((post, index) => (
                    <div className="flex flex-wrap" key={index}>
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
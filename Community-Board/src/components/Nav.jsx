import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// simple nav component
const Nav = () => {

    

    return (
        <nav className="bg-gray-800">
            <Link to="/" className="text-white text-2xl font-bold">
                Community Board
            </Link>
            <ul className="flex justify-end">
                <li className="mr-6">
                    <Link to="/posts" className="board-link">
                        Posts
                    </Link>
                </li>
                <li>
                </li>
                </ul>
            </nav>
        );
    };

    export default Nav;



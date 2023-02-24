// 404 react page
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
        <h1 className="title mb-6">404 | Oops something went wrong (-_-｡)</h1>
        <p className="mb-8">Please use the navigation to find your way back</p>
        <div className="my-4 grid justify-center">
            <Link to="/" className="btn btn-primary">
            Home
            </Link>
        </div>
        </div>
    )
    }

export default NotFound

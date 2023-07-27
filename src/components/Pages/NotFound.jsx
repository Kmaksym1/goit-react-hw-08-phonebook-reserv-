import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>You may start from our home page <Link to='/'>Home</Link></p>
        </div>
    )
}
export default NotFound;
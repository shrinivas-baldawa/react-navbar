import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1">
            <div className="container-fluid">
                <h1 className = "navbar-brand">Shobhana Iyer</h1>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                        </div>
                    </div>
            </div>
        </nav>
    )
}








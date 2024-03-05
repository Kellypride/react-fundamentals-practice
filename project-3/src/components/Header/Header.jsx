import React from "react"
import "./Header.css"
import logo from '../assets/logo.png'
// const logo = require('../assets/logo.png')

export default function Header () {
    return (
         <header >
            <nav className="navbar">
                <div className="nav-left">
                <img src={logo} alt="react-logo" className="nav-logo"/>
                <h3 className="nav-h2">ReactFacts</h3>
            </div>
            <h4 className="nav-h3">React Coure Project-3</h4>
            </nav>
        </header>
    )
}



import React from "react"
import {Link} from "react-router-dom"

const Nav = props => {
    return <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/food">Food</Link>
        <Link to="/drinks">Drinks</Link>
    </nav>
}

export default Nav
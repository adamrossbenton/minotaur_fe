import React from "react"
import {Link} from "react-router-dom"

const Nav = props => {
    
    const logout = () => {
        localStorage.clear()
    }

    return <nav className="nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/food">Food</Link>
        <Link className="nav-link" to="/drinks">Drinks</Link>
        {props.token? <form onSubmit={logout}><button id="logout">Logout Admin</button></form> : null}
    </nav>
}

export default Nav
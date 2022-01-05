import React from "react"
import {Link} from "react-router-dom"

const Nav = props => {
    return <>
        <Link to="/food">Food</Link>
        <Link to="/drinks">Drinks</Link>
    </>
}

export default Nav
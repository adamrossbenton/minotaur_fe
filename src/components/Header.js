import React from "react"
import {Link} from "react-router-dom"

import Nav from "./Nav.js"

const Header = props => {
    return <>
        <h1>CYCLOPS</h1>
        <div className="header-subsection" id="address">
            <p>2421 1st Ave</p>
            <p>Seattle, WA 98121</p>
            <p>(206) 441-1677</p>
        </div>
        <div className="header-subsection" id="hours">
            <small>Wed-Thur: 3:00 PM - 12:00 AM</small>
            <small>Fri: 3:00 PM - 2:00 AM</small>
            <small>Sat: 12:00 PM - 2:00 AM</small>
            <small>Sun: 12:00 PM - 12:00 AM</small>
        </div>
        <Nav token={props.token}/>
        <Link to="/login">Admin Login</Link>
    </>
}

export default Header
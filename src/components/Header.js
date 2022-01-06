import React from "react"

import Nav from "./Nav.js"

const Header = props => {
    return <>
        <h1>MINOTAUR BAR</h1>
        <div className="header-subsection" id="address">
            <h4>2421 1st Ave</h4>
            <h4>Seattle, WA 98121</h4>
        </div>
        <div className="header-subsection" id="hours">
            <h6>Wed-Thur: 3:00 PM - 12:00 AM</h6>
            <h6>Fri: 3:00 PM - 2:00 AM</h6>
            <h6>Sat: 12:00 PM - 2:00 AM</h6>
            <h6>Sun: 12:00 PM - 12:00 AM</h6>
        </div>
        <Nav/>
    </>
}

export default Header
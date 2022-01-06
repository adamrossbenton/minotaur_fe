import React from "react"

const Footer = props => {
    const year = new Date().getFullYear()
    
    return <>
        <small>Website Designed by Adam Ross Benton © {year}</small>
    </>
}

export default Footer
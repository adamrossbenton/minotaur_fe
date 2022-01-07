import React from "react"

const Footer = props => {
    const year = new Date().getFullYear()

    return <>
        <small>Website Designed by adamrossbenton </small>
        {year===2022? <small>©{year}</small> : <small>© 2022 - {year}</small>}
    </>
}

export default Footer
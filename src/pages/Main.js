// Dependencies
import React, {useEffect, useState} from "react"

// Styles
import "../styles.css"

// Pages/Components
import Nav from "../components/Nav.js"
import Admin from "./Admin.js"
import Drinks from "./Drinks.js"
import Food from "./Food.js"

// Hooks
import AppsHooks from "../hooks/appsHooks.js"

const Main = props => {

    return <>
        <main>
            <div className="main-container">
                <Nav/>
                <h1>This is the main page</h1>
            </div>
        </main>
    </>
}

export default Main
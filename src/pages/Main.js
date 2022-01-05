import React, {useEffect, useState} from "react"
import {Route, Switch} from "react-router-dom"

import "../styles.css"

import Nav from "../components/Nav.js"

import Admin from "./Admin.js"
import Drinks from "./Drinks.js"
import Food from "./Food.js"


const Main = props => {
    return <>
        <main>
            <div className="mainContainer">
                <Nav/>
                <h1>This is the main page</h1>
            </div>
        </main>
    </>
}

export default Main
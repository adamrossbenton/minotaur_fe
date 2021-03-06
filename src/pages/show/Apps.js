import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function AppsSh(props) {
    const token = props.token
    const history = useHistory()
    const id = props.match.params.id
    const apps = props.apps
    const app = apps?.find(p => {
        return p.id == id}
    )

    const removeApp = () => {
        props.deleteApps(app.id, token)
        history.push("/food")
    }
    
    // Lock behind admin permissions
    if (!token) {
        return <>
            <h1>Admin access required</h1>
            <Link to="/food">
                <h3>Return to Food Menu</h3>
            </Link>
        </>
    }

    return <>
        <h1>{app.name}</h1>
        <h3>Price: {app.price}</h3>
        <h5>{app.description}</h5>
        <div>
            <Link to={`/food/appetizers/${app.id}/edit`}><button>Edit Appetizer</button></Link>
            <form onSubmit={removeApp}><button>Delete Appetizer</button></form>
        </div>
    </>
}

export default AppsSh
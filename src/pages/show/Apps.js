import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function AppsSh(props) {
    const token = props.token
    const history = useHistory()
    const id = props.match.params.id
    const apps = props.apps
    console.log(apps)
    const app = apps?.find(p => {
        return p.id == id}
    )

    const removeApp = () => {
        props.deleteApps(app.id, token)
        history.push("/food")
    }
    
    console.log("app ID: ", app.id)
    console.log("app ID type: ", typeof app.id)

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
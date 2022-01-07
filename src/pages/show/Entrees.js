import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function EntreesSh(props) {
    const token = props.token
    const history = useHistory()
    const id = props.match.params.id
    const entrees = props.entrees
    console.log(entrees)
    const ent = entrees?.find(p => {
        return p.id == id}
    )

    const removeEntree = () => {
        props.deleteEntrees(ent.id, token)
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
        <h1>{ent.name}</h1>
        <h3>Price: {ent.price}</h3>
        <h5>{ent.description}</h5>
        <div>
            <Link to={`/food/entrees/${ent.id}/edit`}><button>Edit Entree</button></Link>
            <form onSubmit={removeEntree}><button>Delete Entree</button></form>
        </div>
    </>
}

export default EntreesSh
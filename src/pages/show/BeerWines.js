import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function BeerWinesSh(props) {
    const token = props.token
    const history = useHistory()
    const id = props.match.params.id
    const beerWines = props.beerWines
    const bw = beerWines?.find(p => {
        return p.id == id}
    )

    const removeBeerWine = () => {
        props.deleteBeerWines(bw.id, token)
        history.push("/drinks")
    }
    
    // Lock behind admin permissions
    if (!token) {
        return <>
            <h1>Admin access required</h1>
            <Link to="/drinks">
                <h3>Return to Drinks Menu</h3>
            </Link>
        </>
    }

    return <>
        <h1>{bw.name}</h1>
        {bw.beer? bw.draft? <h3>Beer On Tap</h3> : <h3>Bottled/Canned Beer</h3> : bw.red? <h3>Red Wine</h3> : <h3>White Wine</h3> }
        <div>
            <Link to={`/drinks/beerwines/${bw.id}/edit`}><button>Edit Beer/Wine</button></Link>
            <form onSubmit={removeBeerWine}><button>Delete Beer/Wine</button></form>
        </div>
    </>
}

export default BeerWinesSh
import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function DrinksSh(props) {
    const token = props.token
    const history = useHistory()
    const id = props.match.params.id
    const drinks = props.drinks
    console.log(drinks)
    const drink = drinks?.find(p => {
        return p.id == id}
    )

    const removeDrink = () => {
        props.deleteDrinks(drink.id, token)
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
        <h1>{drink.name}</h1>
        <h3>Price: {drink.price}</h3>
        <h5>{drink.description}</h5>
        <div>
            <Link to={`/drinks/cocktails/${drink.id}/edit`}><button>Edit Cocktail</button></Link>
            <form onSubmit={removeDrink}><button>Delete Cocktail</button></form>
        </div>
    </>
}

export default DrinksSh
import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function BeerWinesNew(props) {
    const token = props.token
    const history = useHistory()

    const [newForm, setNewForm] = useState({
        name: "",
        beer: false,
        draft: false,
        red: false,
    })

    const handleChange = e => {
        setNewForm({...newForm,
        [e.target.name]: e.target.value})
    }

    const handleCheck = e => {
        setNewForm({...newForm,
        [e.target.name]: e.target.checked})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.createBeerWines(newForm, token)
        setNewForm({
            name: "",
            beer: false,
            draft: false,
            red: false,
        })
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
        <div className="new-item">
            <form onSubmit={handleSubmit} className="new-form">
                <h3>Beer/Wine Name: </h3>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Beer/Wine Name"
                    onChange={handleChange}
                    // required
                />
                <h3>Is It Beer?</h3>
                <input
                    type="checkbox"
                    name="beer"
                    onClick={handleCheck}
                />
                <h3>If it is beer, is it on tap?</h3>
                <input
                    type="checkbox"
                    name="draft"
                    onClick={handleCheck}
                />
                <h3>If it is wine, is it a red?</h3>
                <input
                    type="checkbox"
                    name="red"
                    onClick={handleChange}
                />
                <input type="submit" value="Create New Beer/Wine" />
            </form>
        </div>
    </>
}

export default BeerWinesNew
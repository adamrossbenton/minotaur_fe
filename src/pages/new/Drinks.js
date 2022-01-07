import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function DrinksNew(props) {
    const token = props.token
    const history = useHistory()

    const [newForm, setNewForm] = useState({
        name: "",
        price: 0,
        description: "",
    })

    const handleChange = e => {
        setNewForm({...newForm,
        [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.createDrinks(newForm, token)
        setNewForm({
            name: "",
            price: 0,
            description: "",
        })
        history.push("/drinks")
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
        <div className="new-item">
            <form onSubmit={handleSubmit} className="new-form">
                <h3>Cocktail Name: </h3>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Cocktail Name"
                    onChange={handleChange}
                    // required
                />
                <h3>Cocktail Price: </h3>
                <input
                    type="number"
                    value={newForm.price}
                    name="price"
                    placeholder="0"
                    onChange={handleChange}
                    // required
                />
                <h3>Cocktail Description: </h3>
                <textarea 
                    name="description"
                    value={newForm.description}
                    placeholder="Cocktail Description"
                    cols="40"
                    rows="5"
                    onChange={handleChange}
                ></textarea>
                <input type="submit" value="Create New Cocktail" />
            </form>
        </div>
    </>
}

export default DrinksNew
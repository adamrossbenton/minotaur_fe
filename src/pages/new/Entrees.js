import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function EntreesNew(props) {
    const token = props.token
    const history = useHistory()

    const [newForm, setNewForm] = useState({
        name: "",
        price: 0,
        description: "",
        vegetarian: false,
        vegan: false,
        gf: false,
        df: false
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
        props.createEntrees(newForm, token)
        setNewForm({
            name: "",
            price: 0,
            description: "",
            vegetarian: false,
            vegan: false,
            gf: false,
            df: false    
        })
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
        <div className="new-item">
            <form onSubmit={handleSubmit} className="new-form">
                <h3>Entree Name: </h3>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Entree Name"
                    onChange={handleChange}
                    // required
                />
                <h3>Entree Price: </h3>
                <input
                    type="number"
                    value={newForm.price}
                    name="price"
                    placeholder="0"
                    onChange={handleChange}
                    // required
                />
                <h3>Entree Description: </h3>
                <textarea 
                    name="description"
                    value={newForm.description}
                    placeholder="Entree Description"
                    cols="40"
                    rows="5"
                    onChange={handleChange}
                ></textarea>
                <h3>Is It Vegetarian?</h3>
                <input
                    type="checkbox"
                    name="vegetarian"
                    onClick={handleCheck}
                />
                <h3>Is It Vegan?</h3>
                <input
                    type="checkbox"
                    name="vegan"
                    onClick={handleCheck}
                />
                <h3>Is It Gluten-Free?</h3>
                <input
                    type="checkbox"
                    name="gf"
                    onClick={handleChange}
                />
                <h3>Is It Dairy-Free?</h3>
                <input
                    type="checkbox"
                    name="df"
                    onClick={handleChange}
                />
                <input type="submit" value="Create New Entree" />
            </form>
        </div>
    </>
}

export default EntreesNew
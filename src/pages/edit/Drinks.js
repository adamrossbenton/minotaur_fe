import {useState, useRef, useEffect} from "react"
import {Link, useHistory} from "react-router-dom"

function DrinksEd(props) {
    
    useEffect(() => props.getDrinks(), [])

    const token = props.token
    const history = useHistory()
    const id = props.match.params.id
    const drinks = props.drinks
    const drink = drinks?.find(p => {
        return p.id == id
    })

    const [editForm, setEditForm] = useState(drink)

    const handleChange = e => {
        setEditForm({...editForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateDrinks(editForm, drink.id, token)
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
        <div className="edit-section">
            <form onSubmit={handleSubmit} className="new-form">
                <h1>Edit {drink.name}:</h1>
                <p>Name: </p>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Cocktail Name"
                    onChange={handleChange}
                />
                <p>Price: </p>
                <input
                    type="number"
                    value={editForm.price}
                    name="price"
                    placeholder="0"
                    onChange={handleChange}
                />
                <p>Description: </p>
                <textarea
                    name="description"
                    value={editForm.description}
                    placeholder="Cocktail Description"
                    cols="40"
                    rows="5"
                    onChange={handleChange}
                ></textarea>
                <input type="submit" value="Edit Cocktail" />
            </form>
            <Link to={`drinks/cocktails/${drink.id}`}><button>Cancel</button></Link>
        </div>
    </>
}

export default DrinksEd
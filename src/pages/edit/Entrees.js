import {useState, useRef, useEffect} from "react"
import {Link, useHistory} from "react-router-dom"

function EntreesEd(props) {
    
    useEffect(() => props.getEntrees(), [])

    const token = props.token
    const history = useHistory()
    const id = props.match.params.id
    const entrees = props.entrees
    const ent = entrees?.find(p => {
        return p.id == id
    })

    const [editForm, setEditForm] = useState(ent)

    const handleChange = e => {
        setEditForm({...editForm,
            [e.target.name]: e.target.value
        })
    }

    const handleCheck = e => {
        setEditForm({...editForm,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateEntrees(editForm, ent.id, token)
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
        <div className="edit-section">
            <form onSubmit={handleSubmit} className="new-form">
                <h1>Edit {ent.name}:</h1>
                <p>Name: </p>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Entree Name"
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
                    placeholder="Entree Description"
                    cols="40"
                    rows="5"
                    onChange={handleChange}
                ></textarea>
                <p>Vegetarian? </p>
                <input
                    type="checkbox"
                    name="vegetarian"
                    checked={editForm.vegetarian}
                    onChange={handleCheck}
                />
                <p>Vegan? :</p>
                <input
                    type="checkbox"
                    name="vegan"
                    checked={editForm.vegan}
                    onChange={handleCheck}
                />
                <p>Gluten free? </p>
                <input
                    type="checkbox"
                    name="gf"
                    checked={editForm.gf}
                    onChange={handleCheck}
                />
                <p>Dairy free?</p>
                <input
                    type="checkbox"
                    name="df"
                    checked={editForm.df}
                    onChange={handleCheck}
                />
                <input type="submit" value="Edit Entree" />
            </form>
            <Link to={`food/entrees/${ent.id}`}><button>Cancel</button></Link>
        </div>
    </>
}

export default EntreesEd
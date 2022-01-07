import {useState, useRef, useEffect} from "react"
import {Link, useHistory} from "react-router-dom"

function BeerWinesEd(props) {
    
    useEffect(() => props.getBeerWines(), [])

    const token = props.token
    const history = useHistory()
    const id = props.match.params.id
    const beerWines = props.beerWines
    const bw = beerWines?.find(p => {
        return p.id == id
    })

    const [editForm, setEditForm] = useState(bw)

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
        props.updateBeerWines(editForm, bw.id, token)
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
                <h1>Edit {bw.name}:</h1>
                <p>Name: </p>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Beer/Wine Name"
                    onChange={handleChange}
                />
                <p>Is it beer?</p>
                <input
                    type="checkbox"
                    name="beer"
                    checked={editForm.beer}
                    onChange={handleCheck}
                />
                <p>If it is beer, is it on tap?</p>
                <input
                    type="checkbox"
                    name="draft"
                    checked={editForm.draft}
                    onChange={handleCheck}
                />
                <p>If it is wine, is it red?</p>
                <input
                    type="checkbox"
                    name="red"
                    checked={editForm.red}
                    onChange={handleCheck}
                />
                <input type="submit" value="Edit Beer/Wine" />
            </form>
            <Link to={`drinks/beerwines/${bw.id}`}><button>Cancel</button></Link>
        </div>
    </>
}

export default BeerWinesEd
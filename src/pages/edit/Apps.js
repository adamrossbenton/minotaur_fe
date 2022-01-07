import {useState, useRef, useEffect} from "react"
import {Link, useHistory} from "react-router-dom"

function AppsEd(props) {
    
    useEffect(() => props.getApps(), [])

    const token = props.token
    const history = useHistory()
    const id = props.match.params.id
    const apps = props.apps
    const app = apps?.find(p => {
        console.log("apps: ", apps)
        return p.id == id
    })
    console.log("app: ", app)

    const [editForm, setEditForm] = useState(app)

    const handleChange = e => {
        setEditForm({...editForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateApps(editForm, app.id)
        history.push("/food")
    }

    // Lock behind admin permissions
    // if (!token) {
    //     return <>
    //         <h1>Admin access required</h1>
    //         <Link to="/food">
    //             <h3>Return to Food Menu</h3>
    //         </Link>
    //     </>
    // }

    return <>
        <div className="edit-section">
            <form onSubmit={handleSubmit} className="new-form">
                <h1>Edit {app.name}:</h1>
                <p>Name: </p>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="App Name"
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
                    placeholder="App Description"
                    cols="40"
                    rows="5"
                    onChange={handleChange}
                ></textarea>
                <p>Vegetarian? </p>
                <input
                    type="checkbox"
                    name="vegetarian"
                    checked={editForm.vegetarian}
                />
                <p>Vegan? :</p>
                <input
                    type="checkbox"
                    name="vegan"
                    checked={editForm.vegan}
                />
                <p>Gluten free? </p>
                <input
                    type="checkbox"
                    name="gf"
                    checked={editForm.gf}
                />
                <p>Dairy free?</p>
                <input
                    type="checkbox"
                    name="df"
                    checked={editForm.df}
                />
                <input type="submit" value="Edit Appetizer" />
            </form>
        </div>
    </>
}

export default AppsEd
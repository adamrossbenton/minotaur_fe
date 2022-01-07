import {useState, useRef, useEffect} from "react"
import {Link, useHistory} from "react-router-dom"

function AppsEd(props) {
    
    useEffect(() => props.getApps(), [])

    const token = props.token
    const history = useHistory()
    const id = props.match.params.id
    const apps = props.apps
    console.log(id)
    console.log(apps)
    const app = apps?.find(p => {
        console.log("p.id: " + typeof p.id)
        console.log("id: " + typeof id)
        return p.id == id
    })
    console.log("app: ", app)
    // Question: would it be p._id or is that just Mongo?

    // const [editForm, setEditForm] = useState(app)

    // const handleChange = e => {
    //     setEditForm({...editForm,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     props.updateApps(editForm, app.id)
    //     // Question: would it be app._id or is that just Mongo?
    //     history.push("/food")
    // }

    if (!token) {
        return <>
            <h1>Admin access required</h1>
            <Link to="/food">
                <h3>Return to Food Menu</h3>
            </Link>
        </>
    }

    return <>
        <h1>{app.name}</h1>
    </>
}

export default AppsEd
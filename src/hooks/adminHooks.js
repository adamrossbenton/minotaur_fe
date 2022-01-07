import {useState} from "react"
import {useHistory} from "react-router-dom"
import url from "./url"

const AdminHooks = () => {
    
    // const loginUrl = "https://minotaurbackend.herokuapp.com/login/"
    const loginUrl = url + "login"
    const signupUrl = url + "signup"

    const history = useHistory()

    // Token Setup
    const getToken = () => {
        const tokenString = localStorage.getItem("token")
        const userToken = JSON.parse(tokenString)
        return userToken?.token
    }
    const [token, setToken] = useState(getToken())

    const saveToken = userToken => {
        console.log(userToken)
        localStorage.setItem("token", JSON.stringify(userToken))
        setToken(userToken)
    }

    // Login/Create Functions
    const loginUser = creds => {
        return fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
        .then(data => data.json())
    }

    const createUser = async creds => {
        await fetch(signupUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(creds),
        })
    }

    // Form Submission
    // TODO: May need separate form states for login and signup?
    const [newForm, setNewForm] = useState()
    const [attempts, setAttempts] = useState(0)

    const handleChange = e => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        })
    }

    const noUser = () => {
        if (attempts > 0) {
            return <p>Incorrect username and/or password, please try again</p>
        }
    }

    const handleLogin = async e => {
        setAttempts(attempts+1)
        e.preventDefault()
        if (newForm) {
            const {username} = newForm
            const {password} = newForm
            const token = await loginUser({
                username,
                password
            })
            console.log("Token: ", token)
            if (token && !token.error) {
                saveToken(token)
                history.push("/")
            } else {
                noUser()
            }
        }
    }

    const handleSignup = e => {
        e.preventDefault()
        createUser(newForm)
        setNewForm({
            username: "",
            password: "",
        })
        history.push("/login")
    }

    return {
        // token:
        setToken: saveToken,
        token,
        // login/signup fns
        loginUser, createUser,
        // form submission
        newForm, setNewForm,
        attempts, setAttempts,
        handleChange,
        handleLogin, handleSignup,
        noUser,
    }

}

export default AdminHooks
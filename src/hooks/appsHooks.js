import {useState} from "react"

function AppsHooks() {
    // DB URL & State
    const appsUrl = "https://minotaurbackend.herokuapp.com/appetizers/"
    // const appsUrl = "http://localhost:4000/appetizers"
    const [apps, setApps] = useState(null)

    // Hooks
    const getApps = async () => {
        const response = await fetch(appsUrl)
        const data = await response.json()
        setApps(data)
    }

    const createApps = async (app) => {
        await fetch(appsUrl, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(app)
        })
        getApps()
    }

    const updateApps = async (app, id) => {
        await fetch(appsUrl + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(app)
        })
        getApps()
    }

    const deleteApps = async id => {
        await fetch(appsUrl + id, {
            method: "delete",
        })
        getApps()
    }
    return {
        apps,
        setApps,
        getApps,
        createApps,
        updateApps,
        deleteApps
    }
}

export default AppsHooks
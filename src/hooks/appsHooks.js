import {useState} from "react"
import url from "./url"
function AppsHooks() {
    // DB URL & State
    const appsUrl = url + "appetizers/"
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

    const updateApps = async (app, id, token) => {
        await fetch(appsUrl + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
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
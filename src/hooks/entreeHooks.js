import {useState} from "react"

function EntreesHooks() {
    // DB URL & State
    const entreesUrl = "https://minotaurbackend.herokuapp.com/appetizers/"
    const [entrees, setEntrees] = useState(null)

    // Hooks
    const getEntrees = async () => {
        const response = await fetch(entreesUrl)
        const data = await response.json()
        setEntrees(data)
    }

    const createEntrees = async (ent) => {
        await fetch(entreesUrl, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ent)
        })
        getEntrees()
    }

    const updateEntrees = async (ent, id) => {
        await fetch(entreesUrl + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ent)
        })
        getEntrees()
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
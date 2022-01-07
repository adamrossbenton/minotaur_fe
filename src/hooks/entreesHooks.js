import {useState} from "react"
import url from "./url"
function EntreesHooks() {
    // DB URL & State
    const entreesUrl = url + "entrees/"
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

    const deleteEntrees = async id => {
        await fetch(entreesUrl + id, {
            method: "delete",
        })
        getEntrees()
    }
    return {
        entrees,
        setEntrees,
        getEntrees,
        createEntrees,
        updateEntrees,
        deleteEntrees
    }
}

export default EntreesHooks
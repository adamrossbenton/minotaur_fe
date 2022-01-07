import {useState} from "react"
import url from "./url"

function DrinksHooks() {
    // DB URL & State
    const drinksUrl = url + "drinks/"
    const [drinks, setDrinks] = useState(null)

    // Hooks
    const getDrinks = async () => {
        const response = await fetch(drinksUrl)
        const data = await response.json()
        setDrinks(data)
    }

    const createDrinks = async (drink, token) => {
        await fetch(drinksUrl, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            },
            body: JSON.stringify(drink)
        })
        getDrinks()
    }

    const updateDrinks = async (drink, id, token) => {
        await fetch(drinksUrl + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            },
            body: JSON.stringify(drink)
        })
        getDrinks()
    }

    const deleteDrinks = async (id, token) => {
        await fetch(drinksUrl + id, {
            method: "delete",
            headers: {
                "Authorization": `bearer ${token}`
            }
        })
        getDrinks()
    }
    return {
        drinks,
        setDrinks,
        getDrinks,
        createDrinks,
        updateDrinks,
        deleteDrinks
    }
}

export default DrinksHooks
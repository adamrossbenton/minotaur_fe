import {useState} from "react"

function DrinksHooks() {
    // DB URL & State
    const drinksUrl = "https://minotaurbackend.herokuapp.com/drinks/"
    const [drinks, setDrinks] = useState(null)

    // Hooks
    const getDrinks = async () => {
        const response = await fetch(drinksUrl)
        const data = await response.json()
        setDrinks(data)
    }

    const createDrinks = async (drink) => {
        await fetch(drinksUrl, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(drink)
        })
        getDrinks()
    }

    const updateDrinks = async (drink, id) => {
        await fetch(drinksUrl + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(drink)
        })
        getDrinks()
    }

    const deleteDrinks = async id => {
        await fetch(drinksUrl + id, {
            method: "delete",
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
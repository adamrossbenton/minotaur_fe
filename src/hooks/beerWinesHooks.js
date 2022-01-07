import {useState} from "react"
import url from "./url"
function BeerWinesHooks() {
    // DB URL & State
    const beerWinesUrl = url + "beerwines/"
    const [beerWines, setBeerWines] = useState(null)

    // Hooks
    const getBeerWines = async () => {
        const response = await fetch(beerWinesUrl)
        const data = await response.json()
        setBeerWines(data)
    }

    const createBeerWines = async (bw, token) => {
        await fetch(beerWinesUrl, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            },
            body: JSON.stringify(bw)
        })
        getBeerWines()
    }

    const updateBeerWines = async (bw, id, token) => {
        await fetch(beerWinesUrl + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            },
            body: JSON.stringify(bw)
        })
        getBeerWines()
    }

    const deleteBeerWines = async (id, token) => {
        await fetch(beerWinesUrl + id, {
            method: "delete",
            headers: {
                "Authorization": `bearer ${token}`
            }
        })
        getBeerWines()
    }
    return {
        beerWines,
        setBeerWines,
        getBeerWines,
        createBeerWines,
        updateBeerWines,
        deleteBeerWines
    }
}

export default BeerWinesHooks
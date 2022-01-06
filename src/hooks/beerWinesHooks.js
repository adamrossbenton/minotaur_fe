import {useState} from "react"

function BeerWinesHooks() {
    // DB URL & State
    const beerWinesUrl = "https://minotaurbackend.herokuapp.com/beerwines/"
    const [beerWines, setBeerWines] = useState(null)

    // Hooks
    const getBeerWines = async () => {
        const response = await fetch(beerWinesUrl)
        const data = await response.json()
        setBeerWines(data)
    }

    const createBeerWines = async (bw) => {
        await fetch(beerWinesUrl, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bw)
        })
        getBeerWines()
    }

    const updateBeerWines = async (bw, id) => {
        await fetch(beerWinesUrl + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bw)
        })
        getBeerWines()
    }

    const deleteBeerWines = async id => {
        await fetch(beerWinesUrl + id, {
            method: "delete",
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
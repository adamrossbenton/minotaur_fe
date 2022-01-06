import React, {useEffect} from "react"

const Drinks = props => {

    // useEffect for initial entree/app render
    useEffect(() => props.getDrinks(), [])
    useEffect(() => props.getBeerWines(), [])

    const loading = () => {
        return <h1>Loading...</h1>
    }

    const loadedDrinks = () => {
        return props.drinks.map((drink) => (
            <div key={drink.id} className="item-section">
                <div className="name-price">
                    <div className="name-dietary">
                        <h3>{drink.name}</h3>
                        <div className="dietary"></div>
                    </div>
                    <h4>{drink.price}</h4>
                </div>
                <p>{drink.description}</p>
            </div>
        ))
    }

    const loadedDraft = () => {
        return props.beerWines.filter(bw => bw.draft).map((draft) => (
            <div key={draft.id} className="item-section">
                <div className="name-dietary">
                    <h3>{draft.name}</h3>
                    <div className="dietary"></div>
                </div>
            </div>
        ))
    }

    const loadedBottleCans = () => {
        return props.beerWines.filter(bw => bw.beer && !bw.draft).map((bc) => (
            <div key={bc.id} className="item-section">
                <div className="name-dietary">
                    <h3>{bc.name}</h3>
                    <div className="dietary"></div>
                </div>
            </div>
        ))
    }

    const loadedRed = () => {
        return props.beerWines.filter(bw => bw.red).map((red) => (
            <div key={red.id} className="item-section">
                <div className="name-dietary">
                    <h3>{red.name}</h3>
                    <div className="dietary"></div>
                </div>
            </div>
        ))
    }

    const loadedWhite = () => {
        return props.beerWines.filter(bw => !bw.beer && !bw.red).map((wht) => (
            <div key={wht.id} className="item-section">
                <div className="name-dietary">
                    <h3>{wht.name}</h3>
                    <div className="dietary"></div>
                </div>
            </div>
        ))
    }

    // Render page
    return <>
        <div className="menu-section" key="ent-section">
            <h1>Cocktails:</h1>
            {props.drinks? loadedDrinks() : loading()}
        </div>
        <h1>Beer:</h1>
        <div className="menu-section" key="app-section">
            <h2>Draft:</h2>
            {props.beerWines? loadedDraft() : loading()}
        </div>
        <div className="menu-section" key="app-section">
            <h2>Bottled/Canned:</h2>
            {props.beerWines? loadedBottleCans() : loading()}
        </div>
        <h1>Wine:</h1>
        <div className="menu-section" key="app-section">
            <h2>Red:</h2>
            {props.beerWines? loadedRed() : loading()}
        </div>
        <div className="menu-section" key="app-section">
            <h2>White:</h2>
            {props.beerWines? loadedWhite() : loading()}
        </div>
    </>
}

export default Drinks
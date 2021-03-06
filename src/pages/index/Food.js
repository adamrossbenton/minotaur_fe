import React, {useEffect} from "react"
import {Link} from "react-router-dom"

const FoodIn = props => {

    const token = props.token

    // useEffect for initial entree/app render
    useEffect(() => props.getEntrees(), [])
    useEffect(() => props.getApps(), [])

    // Partials
    const veggie = () => <img className="diet-icon" src="https://safoodbank.org/wp-content/uploads/2018/05/Vegetarian-Icon.png" alt="Vegg"/>
    const vegan = () => <img className="diet-icon" src="https://www.pngitem.com/pimgs/m/550-5501122_vegan-icon-transparent-black-white-png-download-black.png" alt="Vegn"/>
    const gFree = () => <img className="diet-icon" src="https://cdn1.iconfinder.com/data/icons/eco-food-and-cosmetic-labels/128/Artboard_15-512.png" alt="GF"/>
    const dFree = () => <img className="diet-icon" src="https://cdn1.iconfinder.com/data/icons/eco-food-and-cosmetic-labels/128/Artboard_13-512.png" alt="DF"/>

    const loading = () => {
        return <h1>Loading...</h1>
    }

    const loadedEntrees = () => {
        return props.entrees.map((ent) => (
            <div key={ent.id} className="item-section">
                <div className="name-price">
                    <div className="name-dietary">
                        {token? <Link to={`/food/entrees/${ent.id}`}>{ent.name}</Link> : <h3>{ent.name}</h3>}
                        <div className="dietary">
                            {ent.vegetarian? veggie() : null}
                            {ent.vegan? vegan() : null}
                            {ent.gf? gFree() : null}
                            {ent.df? dFree() : null}
                        </div>
                    </div>
                    <h4>{ent.price}</h4>
                </div>
                <p>{ent.description}</p>
            </div>
        ))
    }

    const loadedApps = () => {
        return props.apps.map((app) => (
            <div key={app.id} className="item-section">
                <div className="name-price">
                    <div className="name-dietary">
                        {token? <Link to={`/food/appetizers/${app.id}`}>{app.name}</Link> : <h3>{app.name}</h3>}
                        <div className="dietary">
                            {app.vegetarian? veggie() : null}
                            {app.vegan? vegan() : null}
                            {app.gf? gFree() : null}
                            {app.df? dFree() : null}
                        </div>
                    </div>
                    <h4>{app.price}</h4>
                </div>
                <p>{app.description}</p>
            </div>
        ))
    }

    // Render page
    return <>
        <div className="menu-section" id="ent-section">
            <h1>Entrees:</h1>
            {token? <Link to="/food/entrees/new"><button>Add Entree</button></Link> : null}
            {props.entrees? loadedEntrees() : loading()}
        </div>
        <div className="menu-section" id="app-section">
            <h1>Appetizers:</h1>
            {token? <Link to="/food/appetizers/new"><button>Add Appetizer</button></Link> : null}
            {props.apps? loadedApps() : loading()}
        </div>
    </>
}

export default FoodIn
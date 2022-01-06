// Dependencies
import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"

// Styles
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// Components/Pages
import Drinks from "./pages/Drinks"
import Food from "./pages/Food"
import Main from "./pages/Main"
import Admin from "./pages/Admin"
import Header from "./components/Header"
import Footer from "./components/Footer"

// Hooks
import AppsHooks from "./hooks/appsHooks.js"
import EntreesHooks from "./hooks/entreesHooks.js"
import DrinksHooks from "./hooks/drinksHooks.js"
import BeerWinesHooks from "./hooks/beerWinesHooks.js"

function App(props) {
  
  // Hooks for each type of food/drink
  const {apps, setApps, getApps, createApps, updateApps, deleteApps} = AppsHooks()
  const {entrees, setEntrees, getEntrees, createEntrees, updateEntrees, deleteEntrees} = EntreesHooks()
  const {drinks, setDrinks, getDrinks, createDrinks, updateDrinks, deleteDrinks} = DrinksHooks()
  const {beerWines, setBeerWines, getBeerWines, createBeerWines, updateBeerWines, deleteBeerWines} = BeerWinesHooks()
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact 
          path="/"
          render={(routerProps) => <Main {...routerProps}/>}
        />
        <Route 
          path="/food"
          render={(routerProps) => (
            <Food {...routerProps}
              entrees = {entrees}
              setEntrees = {setEntrees}
              getEntrees={getEntrees}
              createEntrees={createEntrees}
              updateEntrees={updateEntrees}
              deleteEntrees={deleteEntrees}
              apps={apps}
              setApps={setApps}
              getApps = {getApps}
              createApps = {createApps}
              updateApps = {updateApps}
              deleteApps = {deleteApps}
            />
          )}
        />
        <Route 
          path="/drinks"
          render={(routerProps) => (
            <Drinks {...routerProps}
              drinks = {drinks}
              setDrinks = {setDrinks}
              getDrinks = {getDrinks}
              createDrinks = {createDrinks}
              updateDrinks = {updateDrinks}
              deleteDrinks = {deleteDrinks}
              beerWines = {beerWines}
              setBeerWines = {setBeerWines}
              getBeerWines = {getBeerWines}
              createBeerWines = {createBeerWines}
              updateBeerWines = {updateBeerWines}
              deleteBeerWines = {deleteBeerWines}
            />
          )}
        />
        <Route 
          path="/admin"
          render={(routerProps) => (
            <Admin {...routerProps}/>
          )}
        />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

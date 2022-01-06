// Dependencies
import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"

// Styles
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// Components/Pages
import DrinksIn from "./pages/index/Drinks"
import FoodIn from "./pages/index/Food"
import Main from "./pages/Main"
import Login from "./pages/admin/Login"
import Signup from "./pages/admin/Signup"
import Header from "./components/Header"
import Footer from "./components/Footer"

// Hooks
import AppsHooks from "./hooks/appsHooks.js"
import EntreesHooks from "./hooks/entreesHooks.js"
import DrinksHooks from "./hooks/drinksHooks.js"
import BeerWinesHooks from "./hooks/beerWinesHooks.js"
import AdminHooks from "./hooks/adminHooks.js"

function App(props) {
  
  // Hooks for each type of food/drink
  const {apps, setApps, getApps, createApps, updateApps, deleteApps} = AppsHooks()
  const {entrees, setEntrees, getEntrees, createEntrees, updateEntrees, deleteEntrees} = EntreesHooks()
  const {drinks, setDrinks, getDrinks, createDrinks, updateDrinks, deleteDrinks} = DrinksHooks()
  const {beerWines, setBeerWines, getBeerWines, createBeerWines, updateBeerWines, deleteBeerWines} = BeerWinesHooks()
  const {token, setToken, loginUser, createUser, newForm, setNewForm, attempts, setAttempts, handleChange, handleLogin, handleSignup, noUser} = AdminHooks()
  
  return (
    <div className="App">
      <Header token={token}/>
      <Switch>
        {/* HOME PAGE */}
        <Route exact 
          path="/"
          render={(routerProps) => <Main {...routerProps}
            token={token}
            setToken={setToken}
          />}
        />

        {/* FOOD ROUTES */}
        <Route 
          path="/food"
          render={(routerProps) => (
            <FoodIn {...routerProps}
              token={token}
              entrees = {entrees}
              getEntrees={getEntrees}
              apps={apps}
              getApps = {getApps}
            />
          )}
        />
        <Route 
          path="/food/:id/edit"
        />

        {/* DRINK ROUTES */}
        <Route 
          path="/drinks"
          render={(routerProps) => (
            <DrinksIn {...routerProps}
              token={token}
              drinks = {drinks}
              getDrinks = {getDrinks}
              beerWines = {beerWines}
              getBeerWines = {getBeerWines}
            />
          )}
        />

        {/* ADMIN ROUTES */}
        <Route 
          path="/login"
          render={(routerProps) => (
            <Login {...routerProps}/>
          )}
        />
        <Route 
          path="/signup"
          render={(routerProps) => (
            <Signup {...routerProps}/>
          )}
        />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

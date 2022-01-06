// Dependencies
import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"

// Styles
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// Components/Pages
import Main from "./pages/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"
// Index
import DrinksIn from "./pages/index/Drinks"
import FoodIn from "./pages/index/Food"
// Show
import EntreesSh from "./pages/show/Entrees"
import AppsSh from "./pages/show/Apps"
import DrinksSh from "./pages/show/Drinks"
import BeerWinesSh from "./pages/show/BeerWines"
// Edit
import EntreesEd from "./pages/edit/Entrees"
import AppsEd from "./pages/edit/Apps"
import DrinksEd from "./pages/edit/Drinks"
import BeerWinesEd from "./pages/edit/BeerWines"
// New
import EntreesNew from "./pages/new/Entrees"
import AppsNew from "./pages/new/Apps"
import DrinksNew from "./pages/new/Drinks"
import BeerWinesNew from "./pages/new/BeerWines"
// Admin
import Login from "./pages/admin/Login"
import Signup from "./pages/admin/Signup"

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
          path="/food/appetizers/new"
          render={(routerProps) => (
            <AppsNew {...routerProps}
              token={token}
              createApps={createApps}
            />
          )}
        />
        <Route 
          path="/food/appetizers/:id/edit"
          render={(routerProps) => (
            <AppsEd {...routerProps}
              token={token}
              apps={apps}
              updateApps={updateApps}
            />
          )}
        />
        <Route 
          path="/food/appetizers/:id"
          render={(routerProps) => (
            <AppsSh {...routerProps}
              token={token}
              updateApps={updateApps}
              deleteApps={deleteApps}
            />
          )}
        />
                <Route 
          path="/food/entrees/new"
          render={(routerProps) => (
            <EntreesNew {...routerProps}
              token={token}
              createEntrees={createEntrees}
            />
          )}
        />
        <Route 
          path="/food/entrees/:id/edit"
          render={(routerProps) => (
            <EntreesEd {...routerProps}
              token={token}
              entrees={entrees}
              updateEntrees={updateEntrees}
            />
          )}
        />
        <Route 
          path="/food/entrees/:id"
          render={(routerProps) => (
            <EntreesSh {...routerProps}
              token={token}
              updateEntrees={updateEntrees}
              deleteEntrees={deleteEntrees}
            />
          )}
        />
        <Route 
          path="/food"
          render={(routerProps) => (
            <FoodIn {...routerProps}
              token={token}
              entrees = {entrees}
              getEntrees={getEntrees}
              createEntrees={createEntrees}
              apps={apps}
              getApps = {getApps}
              createApps={createApps}
            />
          )}
        />

        {/* DRINK ROUTES */}
        <Route 
          path="/drinks/cocktails/new"
          render={(routerProps) => (
            <DrinksNew {...routerProps}
              token={token}
              createDrinks={createDrinks}
            />
          )}
        />
        <Route 
          path="/drinks/cocktails/:id/edit"
          render={(routerProps) => (
            <DrinksEd {...routerProps}
              token={token}
              drinks={drinks}
              updateDrinks={updateDrinks}
            />
          )}
        />
        <Route 
          path="/drinks/cocktails/:id"
          render={(routerProps) => (
            <DrinksSh {...routerProps}
              token={token}
              updateDrinks={updateDrinks}
              deleteDrinks={deleteDrinks}
            />
          )}
        />
        <Route 
          path="/drinks"
          render={(routerProps) => (
            <DrinksIn {...routerProps}
              token={token}
              drinks = {drinks}
              getDrinks = {getDrinks}
              createDrinks={createDrinks}
              beerWines = {beerWines}
              getBeerWines = {getBeerWines}
              createBeerWines={createBeerWines}
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

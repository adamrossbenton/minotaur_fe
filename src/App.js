// Dependencies
import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"

// Styles
import './App.css';

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

function App(props) {
  
  // State hooks for each type of food/drink
  const {apps, setApps, getApps, createApps, updateApps, deleteApps} = AppsHooks()
  const {entrees, setEntrees, getEntrees, createEntrees, updateEntrees, deleteEntrees} = EntreesHooks()
  
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
              updateentrees={updateEntrees}
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
            <Drinks {...routerProps}/>
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

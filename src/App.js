import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Drinks from "./pages/Drinks"
import Food from "./pages/Food"
import Main from "./pages/Main"
import Admin from "./pages/Admin"

import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App(props) {
  
  // State to hold current page
  const [menus, setMenus] = useState([])

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
            <Food {...routerProps}/>
          )}
        />
        <Route 
          path="/drinks"
          render={(routerProps) => (
            <Drinks {...routerProps}/>
          )}
        />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

import React, { Component } from "react"
import {Route,Switch} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Explore from "./components/Explore"

import "./App.css"
export class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Switch>
        <Route exact path="/" component={() => <Explore />} />
      </Switch>
      <Footer />
      </>
    )
  }
}

export default App

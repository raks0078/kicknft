import React, { Component } from "react"
import {Route,Switch} from "react-router-dom"

import "./App.css"
export class App extends Component {
  render() {
    return (
      <Header/>
      <Switch>
        <Route exact path="/" component={() => <DextBoard theme={theme} />} />
      </Switch>
      <Footer />
    )
  }
}

export default App

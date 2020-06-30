//  
import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from "react-router-dom"
import "./App.css";
import Home from "./components/";
import Resume from "./components/Resume"
import Contacts from "./components/Contacts"
class App extends Component {


  render() {
    return (
      <>
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contacts" component={Contacts} />

      </>

    )
  }
}

export default App;

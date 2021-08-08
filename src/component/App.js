import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import "./App.css";
class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
           
            <Switch>
             
            </Switch>
          </div>
          
        </BrowserRouter>
         {/* <DataList /> */}
        <Footer />
      </div>
    );
  }
}

export default App;

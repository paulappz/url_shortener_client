import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Footer from "./footer/Footer";
import Landing from "./header/Header";
import "./styles.css";
class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
           
            
          </div>
          
        </BrowserRouter>
        
        <Footer />
      </div>
    );
  }
}

export default App;

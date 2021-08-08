import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Footer.css";
class Footer extends Component {
  render() {
    return (

        <div className="footer">
        Built by{"Paul Oluyege"}
        <a target="_blank" href="http://www.pauloluyege.com">
          Oluyege .P
        </a>© 2021
      </div>

    );
  }
}

export default Footer;
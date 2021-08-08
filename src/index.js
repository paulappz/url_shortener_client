import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";

import './index.css';
import reportWebVitals from './reportWebVitals';

import axios from "axios";
window.axios = axios;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

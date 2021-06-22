import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/fonts/Rajdhani/stylesheet.css";
import "./assets/fonts/Roboto/stylesheet.css";
import "./assets/styles/main.css";

import Routers from "./routers/routers";

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);


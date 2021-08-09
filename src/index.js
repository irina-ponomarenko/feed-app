import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import "./assets/fonts/Rajdhani/stylesheet.css";
import "./assets/fonts/Roboto/stylesheet.css";
import "./assets/styles/main.css";

import Routers from "./routers/routers";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Routers />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.get("/auth/loggedin").then(response => {
  console.log(response);
  ReactDOM.render(
    <BrowserRouter>
      <App user={response.data} />
    </BrowserRouter>,
    document.getElementById("root")
  );
});

// for app to work offline and load fasterchange
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

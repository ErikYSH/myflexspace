import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Home from "./components/Home";
import Home from "./pages/HomePage"
import { BrowserRouter } from "react-router-dom";

const post = {
  title: "Hey Title",
  author: "Erik Yang",
  body: `This is the body of body of React`,
};


ReactDOM.render(
<BrowserRouter>
  <React.StrictMode>
    <Home />
  </React.StrictMode>
</BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

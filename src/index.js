import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter> {/* Defines routes */}
        <Provider store={store}> {/* redux */}
          <App />   
          <Toaster/>  
        </Provider>
    </BrowserRouter>



  
);

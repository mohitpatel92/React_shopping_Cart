import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import {FirebaseProvider} from "./Context/FitebaseAuth.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <FirebaseProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </FirebaseProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "../src/App";
import { store } from "../src/app/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/styles/_global.scss";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

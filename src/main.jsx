/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import createSagaMiddleWare from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserState";
import userSaga from "./UserSaga";

const saga = createSagaMiddleWare();
const strore = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: [saga],
});

saga.run(userSaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={strore}>
    <App />
  </Provider>
);

import React from "react";
import { render } from "react-dom";

import App from "./App";
import "./styles.css";
import { ContextProvider } from "./SocketContext";


render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);

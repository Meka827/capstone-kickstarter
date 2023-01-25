import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { createRoot } from 'react-dom/client'


const root = createRoot(document.getElementById("root"));

root.render(React.createElement(App));
import ReactDOM from "react-dom/client";

import "./index.css";
import Router from "./Router/Router.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

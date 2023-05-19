import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { JobsContextProvider } from "./context/JobContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobsContextProvider>
      <App />
    </JobsContextProvider>
  </React.StrictMode>
);

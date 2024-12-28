import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import "./index.css"; // Import global styles
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App"; // Import the App component
import reportWebVitals from "./reportWebVitals"; // Optional: for performance reporting

// Create the root using createRoot (React 18)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component within React.StrictMode (for development)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: To measure performance, pass a function to log results.
reportWebVitals();

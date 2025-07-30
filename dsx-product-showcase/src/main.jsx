import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@dsx/react";

// Import styles
import "./styles.css";

// Import DSX theme CSS
import "@dsx/react/theme-default";

// Import our App component
import App from "./components/App";

// Create root and render the app
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider locale="en-US">
      <App />
    </Provider>
  </React.StrictMode>
);

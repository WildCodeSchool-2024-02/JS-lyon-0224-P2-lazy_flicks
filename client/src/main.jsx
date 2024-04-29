import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Team from "./components/Team/Team";
import LightModeProvider from "./Context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/team",
    element: <Team />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LightModeProvider>
      <RouterProvider router={router} />
    </LightModeProvider>
  </React.StrictMode>
);

import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Home, Sukses } from "./pages";

export default class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sukses",
        element: <Sukses />,
      },
    ]);

    return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

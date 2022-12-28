import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./templates/Main";
import Item from "./pages/Item";
import Register from "./pages/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/item/:id",
          element: <Item />
        },
        {
          path: "/register",
          element: <Register />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />
};

export default App;

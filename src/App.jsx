import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components/menu/menu";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Like from "./pages/like";
import Layout from "./pages/layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/like",
          element: <Like />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;

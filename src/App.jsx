import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components/menu/menu";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Like from "./pages/like";
import Layout from "./pages/layout";
import MainContextProvider from "./context/mainContext";

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
  return (
    <MainContextProvider>
      <RouterProvider router={routes} />
    </MainContextProvider>
  );
}

export default App;

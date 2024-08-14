import HomePage from "./components/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "*",
          element: <div className="">NotFound</div>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

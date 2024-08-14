import HomePage from "./components/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import DetailsFilm from "./components/DetailsFilm/DetailsFilm";
import './App.css'
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
          path: `/film/:id`,
          element: <DetailsFilm />,
        },
        {
          path: "*",
          element: <div className="">NotFound</div>,
        },
      ],
    },
  ]);
  return (
    <div className="img w-screen h-full ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import ChefDetail from "../pages/ChefDetail/ChefDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Loader from "../component/Loader";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetail></ChefDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://assignment-10-server-lbtoha.vercel.app/chef/${params.id}`).then((response) => response.json()),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;

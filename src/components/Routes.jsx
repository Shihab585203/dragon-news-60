import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "./Category";
import Home from "./Home";
import News from "./News";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "../Contexts/PrivateRoute/PrivateRoute";
import TermsAndConditions from "./TermsAndConditions";
import Profile from "./Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/news'),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "./Category";
import Home from "./Home";
import News from "./News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/category/:id',
            element: <Category></Category>
        },
        {
            path: '/news/:id',
            element: <News></News>
        },
    ]
  },
]);

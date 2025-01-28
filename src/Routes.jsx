
import {
  createBrowserRouter,

} from "react-router-dom";
import "./index.css";
import { Mainlayout } from "./Components/Mainlayout";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookDetail from "./Components/BookDetail/BookDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: ()=> fetch('./booksData.json')
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);
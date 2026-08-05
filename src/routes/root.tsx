
import { createBrowserRouter } from "react-router";
import App from "../App";
import PrivateLayout from "../layouts/PrivateLayout";
import Declations from "../pages/Declations";
import ErrorPage from "../ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: "private", element: <PrivateLayout/>,
    children: [
      { path: "declarations", element: <Declations/>}
    ],
      },
    ],
  },

  
]);

export {router};



import Home from "Pages/Home/Home";
import Root from "Root";
import { Route, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
     
    ],
  },
]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import PhoneDetails from "../components/PhoneDetails/PhoneDetails";
import Login from "../Pages/Login/Login";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/phone/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: () => fetch("./../../public/phones.json"),
      },
    ],
  },
]);

export default Routes;

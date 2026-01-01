import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
// import SignUp from "../Pages/SignUp/SignUp";
// import PrivateRoute from "./PrivateRoute";
// import Dashboard from "../Layout/Dashboard";
// import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
// import MakeAnnouncement from "../Pages/Dashboard/AllUsers/MakeAnnouncement/MakeAnnouncement";
// import AddPost from "../Pages/Dashboard/AddPost/AddPost";
// import PostDetails from "../Pages/PostDetails/PostDetails";
import AboutUs from "../Pages/About Us/AboutUs";
import Contact from "../Pages/Contact/Contact";

// import ServiceDetails from "../Pages/Home/Services/ServiceDetails";




import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
       
        
        
        {
          path:'/about',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        
       
      
      ],
    },
  ]);
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Membership from "../Pages/Membership/Membership";
import Announcement from "../Pages/Home/Announcement/Announcement";
import MakeAnnouncement from "../Pages/Dashboard/AllUsers/MakeAnnouncement/MakeAnnouncement";
import AddPost from "../Pages/Dashboard/AddPost/AddPost";
import PostDetails from "../Pages/PostDetails/PostDetails";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/membership',
          element:<Membership></Membership>
        },
        {
          path:'/announcement',
          element:<Announcement></Announcement>
        },
        {
          path:'/post/:id',
          element:<PostDetails></PostDetails>
        },
        
        
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
      
      ]
    },
    {
      path:'dashboard',
      element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute> ,
      children:[
        
        // admin routes
        {
          path:'users',
          element:<AllUsers></AllUsers>
        },
        {
          path:'makeAnnouncement',
          element:<MakeAnnouncement></MakeAnnouncement>
        },

        // user routes
        {
          path:'addPost',
          element:<AddPost></AddPost>
        }
        
      ]
    }
  ]);
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructors/Instructor";
import InstructorClasses from "../Pages/Instructors/InstructorClasses";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../Pages/StudentDashboard/MyClasses/MyClasses";
import PrivateRoute from "../Providers/PrivateRoute";
import Payment from "../Pages/Payments/Payment";
import Enrolled from "../Pages/StudentDashboard/Enrolled";
import PayHistory from "../Pages/StudentDashboard/PayHistory";
import AddClass from "../Pages/InstructorDashBoard/AddClass";
import InstructorClassesDashBoard from "../Pages/InstructorDashBoard/InstructorClassesDashBoard";
import InstructorUpdateClass from "../Pages/InstructorDashBoard/InstructorUpdateClass";

import AdminRoute from "./AdminRoute";

import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../Pages/Admin/ManageClasses";
import ManageUsers from "../Pages/Admin/ManageUsers";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/allClasses',
          element:<Classes></Classes>
        },
        {
          path:'/instructors',
          element:<Instructor></Instructor>
        },
        {
          path:'/instructors/:id',
          element:<InstructorClasses></InstructorClasses>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'/user/update',
          element:<UpdateProfile></UpdateProfile>
        }
       
      ]
    },
    
        // dashboard 
        {
          path:'/dashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children:[{
            path:'/dashboard/myclasses',
            element:<PrivateRoute><MyClasses></MyClasses></PrivateRoute>
          },
          {
            path: '/dashboard/payment/:id',
            element:<PrivateRoute><Payment></Payment></PrivateRoute>
          },
          {
            path: '/dashboard/enrolled',
            element:<PrivateRoute><Enrolled></Enrolled></PrivateRoute>
          },
          {
            path: '/dashboard/paymenthistory',
            element:<PrivateRoute><PayHistory></PayHistory></PrivateRoute>
          },
          // instructor dashboard
          {
            path: '/dashboard/addaclass',
            element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
          },
          {
            path: '/dashboard/instructorclasses',
            element:<InstructorRoute><InstructorClassesDashBoard></InstructorClassesDashBoard></InstructorRoute>
          },
          {
            path: '/dashboard/instructorclasses/update/:id',
            element:<InstructorRoute><InstructorUpdateClass></InstructorUpdateClass></InstructorRoute>
          },
          // Admin
          {
            path: '/dashboard/admin/manageclasses',
            element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path: '/dashboard/admin/manageusers',
            element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          }

        ]
        }
  ]);

export default router
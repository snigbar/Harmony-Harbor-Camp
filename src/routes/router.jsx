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





const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
       
      ]
    },
    ,
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
            element:<AddClass></AddClass>
          },
          {
            path: '/dashboard/instructorclasses',
            element:<InstructorClassesDashBoard></InstructorClassesDashBoard>
          }
        ]
        }
  ]);

export default router
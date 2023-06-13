import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructors/Instructor";
import InstructorClasses from "../Pages/Instructors/InstructorClasses";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
        },
       
      ]
    },
  ]);

export default router
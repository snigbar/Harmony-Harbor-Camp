import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructors/Instructor";
import InstructorClasses from "../Pages/Instructors/InstructorClasses";

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
       
      ]
    },
  ]);

export default router
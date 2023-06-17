import React from 'react'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
import NavBar from '../Components/Navbar'
import { NavLink } from 'react-router-dom'
import {  FaShoppingCart, FaWallet, FaHome,FaUsers,FaBook,FaPlusCircle, FaFileAlt} from 'react-icons/fa';
import UseCarts from '../Hooks/useCarts'
import useAdmin from '../Hooks/UseAdmin'
import UseIsInstructor from '../Hooks/UseIsInstructor'


const Dashboard = () => {

    const [cart] = UseCarts()
    const [isAdmin] = useAdmin();
    const [isInstructor] = UseIsInstructor()

  return (
    <div>
    <NavBar></NavBar>
    
    {/* dashboard */}
    <div className="flex items-center flex-col lg:flex-row gap-4 my-8 lg:min-h-[60vh]">
   
        <ul className={`menu gap-1 ${isAdmin?"w-72": 'w-80'} p-4 self-center lg:self-start bg-slate-100 dark:bg-gray-900 h-[60vh]`}>
       { isAdmin?
        <>
        <li><NavLink to="/dashboard/admin/manageclasses"><FaBook></FaBook>Manage Classes</NavLink></li>
        <li><NavLink to="/dashboard/admin/manageusers"><FaUsers></FaUsers>Manange Users</NavLink></li>
        </>
        :
        isInstructor?
        <>
        <li><NavLink to="/dashboard/addaclass"><FaPlusCircle></FaPlusCircle>Add Class</NavLink></li>
        <li><NavLink to="/dashboard/instructorclasses"><FaFileAlt></FaFileAlt>My Classes</NavLink></li>
        </>
        :
        <>
        <li><NavLink to="/dashboard/enrolled"><FaHome></FaHome>Enrolled</NavLink></li>
        <li><NavLink to="/dashboard/paymenthistory"><FaWallet></FaWallet>Payment History</NavLink></li>
        <li>
        <NavLink to="/dashboard/myclasses"><FaShoppingCart></FaShoppingCart> My Classes
        <span className="badge inl badge-ghost">{cart?.length || 0}</span>
        </NavLink>
        </li>
        </>}
        </ul>
    

        <div className="flex justify-center self-start w-full lg:max-h-[60vh] overflow-y-scroll dark:text-white">
        <Outlet></Outlet>
        </div>

    </div>
   
    <Footer></Footer>
    </div>
  )
}

export default Dashboard
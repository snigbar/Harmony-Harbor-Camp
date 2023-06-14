import React from 'react'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
import NavBar from '../Components/Navbar'
import { NavLink } from 'react-router-dom'
import {  FaShoppingCart, FaWallet, FaHome} from 'react-icons/fa';
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
   
        <ul className="menu gap-1 p-4 w-80 self-center lg:self-start bg-slate-100 h-[60vh]">
       { isAdmin?
        <>
        <li><NavLink to="/dashboard/enrolled"><FaHome></FaHome>Manage Classes</NavLink></li>
        <li><NavLink to="/dashboard/paymenthistory"><FaWallet></FaWallet>Manange Users</NavLink></li>
        </>
        :
        isInstructor?
        <>
        <li><NavLink to="/dashboard/enrolled"><FaHome></FaHome>Add Class</NavLink></li>
        <li><NavLink to="/dashboard/paymenthistory"><FaWallet></FaWallet>My Classes</NavLink></li>
        </>
        :
        <>
        <li><NavLink to="/dashboard/enrolled"><FaHome></FaHome>Enrolled</NavLink></li>
        <li><NavLink to="/dashboard/paymenthistory"><FaWallet></FaWallet> Payment History</NavLink></li>
        <li>
        <NavLink to="/dashboard/myclasses"><FaShoppingCart></FaShoppingCart> My Classes
        <span className="badge inl badge-ghost">{cart?.length || 0}</span>
        </NavLink>
        </li>
        </>}
        </ul>
    

        <div className="flex justify-center self-start w-full lg:min-h-[60vh] overflow-scroll overflow-x-hidden">
        <Outlet></Outlet>
        </div>

    </div>
   
    <Footer></Footer>
    </div>
  )
}

export default Dashboard
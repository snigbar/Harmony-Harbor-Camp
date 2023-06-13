import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import logo from '../assets/logo.png'


const NavBar = () => {

   
    const isAdmin = true;
    const user = false

    const navOptions = <>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/allclasses">Classes</Link></li>
        {
            isAdmin?  <li><Link to="/dashboard/adminhome">Admin Panel</Link></li> :  <li><Link to="/dashboard/home">Dashboard</Link></li>
        }
        {/* if cart available*/}
        <Link to='/dashboard/mycart'>
        <button className="btn btn-ghost gap-2">
        <FaShoppingCart />
        <div className="badge badge-error">1</div>
        </button>
        </Link>
        </>

    return (
        <>
            <div className="navbar max-w-screen-xl text-zinc-900 bg-white ">
                <div className="navbar-start justify-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                   <img src={logo} className="w-64"></img>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
               {user? 
               <div className="navbar-end">
                   <Link className="btn btn-error">Logout</Link>
                </div>
                :
                <div className="navbar-end gap-x-3">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10">
                <li>
                <a className="justify-between">
                Profile
                <span className="badge">edit</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
                </ul>
                </div>
                <div className="navbar-end">
                   <Link to='/login' className="btn btn-error">Login</Link>
                </div>
                </div>

                }
            </div>
        </>
    );
};

export default NavBar;
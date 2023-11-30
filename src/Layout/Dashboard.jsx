import { NavLink, Outlet } from "react-router-dom";
import {  FaHome, FaCalendar, FaAd, FaMicrophone,  FaList,  FaUsers,  } from "react-icons/fa";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin"
const Dashboard = () => {
    // const [cart] = useCart();
    // TODO :get isAdmin value from the database

    const isAdmin = true;
    // const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* DASHBOARD SIDEBAR */}
            <div className="w-64 min-h-screen bg-gradient-to-b from-green-500 via-red-400 border-t-stone-950">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>

                                <NavLink to='/dashboard/adminProfile'>
                                    <FaHome></FaHome>
                                    Admin Profile</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/makeAnnouncement'>
                                    <FaMicrophone></FaMicrophone>
                                    Make Announcement</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/reportedComments'>
                                    <FaList></FaList>
                                    Reported Comments</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/users'>
                                    <FaUsers></FaUsers>
                                    Manage Users</NavLink>
                            </li>
                            <li>

                                    <NavLink to='/dashboard/addPost'>
                                        <FaAd></FaAd>
                                        Add Post</NavLink>
                                </li>

                        </>
                            :
                            <>
                                <li>

                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome>
                                        My Profile</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/addPost'>
                                        <FaAd></FaAd>
                                        Add Post</NavLink>
                                </li>
                                
                                
                                {/* <li>

                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li> */}
                                <li>

                                    <NavLink to='/dashboard/addPost'>
                                        <FaAd></FaAd>
                                        Add Post</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/myPost'>
                                        <FaCalendar></FaCalendar>
                                        My Post</NavLink>
                                </li>

                            </>
                    }
                    {/* shared navlinks */}
                    {/* DIVIDER AREA */}
                    <div className="divider divider-success"></div>
                    <li>

                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    
                </ul>
            </div>
            {/* DASHBOARD CONTENT */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendar, FaAd } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div className="flex">
            {/* DASHBOARD SIDEBAR */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>

                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            user Home</NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/userHome'>
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart</NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/review'>
                            <FaAd></FaAd>
                            Add a Review</NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/booking'>
                            <FaCalendar></FaCalendar>
                            My Booking</NavLink>
                    </li>
                </ul>
            </div>
            {/* DASHBOARD CONTENT */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
import logo from "../../assets/icon/logo.png"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import {  FaBell } from "react-icons/fa";
import { useEffect, useState } from "react";
// import useCart from '../../hooks/useCart';
import MenuDropdown from "./MenuDropdown";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
      fetch('/announcement.json')
          .then(res => res.json())
          .then(data => setReviews(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  const navOptions = <>
    <li><Link to="/">Home</Link> </li>
    <li><Link to="/membership">Membership</Link> </li>
    {/* <li><Link to="/order/salad">Order Food</Link> </li> */}
    <li>
    <Link to='/announcement'>
          <button className="btn items-center -mt-2">
            <FaBell></FaBell>
            <div className="badge badge-outline ml-2">+{reviews.length}</div>
          </button>
        </Link>
    </li>

    {
      user ? <>
        {/* <span>
          {user?.displayName}
        </span> */}
        <button onClick={handleLogOut} className='btn btn-ghost'></button>
      </> : <>
        <li><Link to="/login">Join Us</Link> </li>
      </>
    }

  </>
  return (
    <>
      <div className="navbar  bg-opacity-30 bg-black text-white max-w-screen-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a> */}
          <Link to='/'>
              <img
                className='hidden md:block'
                src={logo}
                alt='logo'
                width='120'
                height='120'
              />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <MenuDropdown></MenuDropdown>
        </div>
      </div>
    </>
  );
};

export default NavBar;
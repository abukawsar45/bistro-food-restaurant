import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaHome,
  FaCalendarAlt,
  FaWallet,
  FaShoppingCart,
  FaRegStar,
  FaBookMedical,
  FaTh,
  FaShoppingBag,
  FaPhoneAlt,
} from 'react-icons/fa';
import useCart from '../hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className='drawer drawer-mobile '>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col  '>
        {/* <!-- Page content here --> */}
        <Outlet />
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
      </div>
      <div className='drawer-side bg-[#D1A054]'>
        <label
          htmlFor='my-drawer-2'
          className='drawer-overlay bg-[#D1A054]'
        ></label>
        <ul className='menu p-4 w-80 bg-[#D1A054] text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to='/dashboard/home'>
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/reservation'>
              <FaCalendarAlt /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/history'>
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/mycart'>
              <FaShoppingCart /> My Cart <span className='badge badge-secondary'>{cart.length || 0} </span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/review'>
              <FaRegStar /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/booking'>
              <FaBookMedical /> My Booking
            </NavLink>
          </li>
          <div className='divider'></div>
          <li>
            <NavLink to='/'>
              <FaHome className='text-green-400' /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/menu'>
              <FaTh /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/shop'>
              <FaShoppingBag /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/contact'>
              <FaPhoneAlt /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
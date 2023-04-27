import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menu = (
    <li>
      <Link className='hover:text-red-500' to='/'>Home</Link>
      <Link className='hover:text-red-500' to='/movies'>Movies</Link>
      <Link className='hover:text-red-500' to='/movies'>Request Movie</Link>
    </li>
  )
    return (
      <div className='bg-black text-white'>
        <div className="navbar flex justify-between container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="bg-black menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
              {menu}
            </ul>
          </div>
          <Link className='text-3xl text-green-700 font-bold' to='/'>Movies<span className='text-red-500'>Hub</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menu}
          </ul>
        </div>
      </div>
      </div>
    );
};

export default Navbar;
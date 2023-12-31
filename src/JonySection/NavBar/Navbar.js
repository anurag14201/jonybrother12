import React from 'react';
import { Link } from 'react-router-dom';
import jonyMart from '../../imgfile/jonymart.png';



const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/Shop'>Shop</Link></li>
                            <li><Link to='/blogs'>Blog</Link></li>
                            <li><Link to='/Vendor'>Vendor</Link></li>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="menu menu-sm px-1">About US</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/about'>About US</Link></li>
                                    <li><Link to='/contact'>Contact US</Link></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl w-24 m-4 pr-2"><img src={jonyMart} alt='jonymart' /></Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/Shop'>Shop</Link></li>
                        <li><Link to='/blogs'>Blog</Link></li>
                        <li><Link to='/Vendor'>Vendor</Link></li>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className="menu menu-horizontal px-1">About US</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/about'>About US</Link></li>
                                <li><Link to='/contact'>Contact US</Link></li>
                            </ul>
                        </div>

                    </ul>
                </div>
                <div className="form-control navbar-end">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                {/* <div>
                    <h1><li><a>Logout</a></li></h1>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
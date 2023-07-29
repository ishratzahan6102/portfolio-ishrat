import React from 'react';
import { Link } from 'react-router-dom';

const Navabr = () => {

    const menu = <>
        <Link className="ml-4 m-2 text-white hover:text-warning " active to='/'>Home</Link>
        <Link className="ml-4 m-2 rounded-none hover:text-warning " to='/blogs'>Blog</Link>
        <Link className="ml-4 m-2 rounded-none hover:text-warning " to='/contact'>Contact</Link>
    </>

    return (
        <div>
            <div className="navbar  text-white shadow-2xl nav-sticky relative px-4 lg:px-20 h-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="text-xl font-bold uppercase">Israt.</a>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu  menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navabr;
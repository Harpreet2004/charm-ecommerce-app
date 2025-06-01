import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { CiSearch } from "react-icons/ci";
import { FaHeart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { BsMinecartLoaded } from "react-icons/bs";

const Navbar = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const isAuthPage = 
        location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/register' ||
        location.pathname === '/forget-password' ||
        location.pathname === '/confirmation-code' ||
        location.pathname === '/new-password';

    return (
        <div className='w-full h-auto bg-white shadow-sm z-50'>
            <div className="lg:container w-full mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="logo_wrapper">
                        <Link to={'/'}><h3 className='text-4xl text-[#484848] uppercase font-semibold'>charm</h3></Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className='hidden lg:flex items-center gap-10'>
                        {isAuthPage ? (
                            <>
                                <NavLink to='/' className='text-base text-[#484848] capitalize font-poppins'>home</NavLink>
                                <NavLink to='/' className='text-base text-[#484848] capitalize font-poppins'>deals</NavLink>
                                <NavLink to='/' className='text-base text-[#484848] capitalize font-poppins'>new arrivals</NavLink>
                                <NavLink to='/' className='text-base text-[#484848] capitalize font-poppins'>packages</NavLink>
                                <NavLink to='/login' className='text-base text-[#484848] capitalize font-poppins'>sign in</NavLink>
                                <NavLink to='/register' className='px-6 py-2.5 bg-black text-white rounded-lg font-poppins capitalize'>sign up</NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to='/' className='text-base text-[#484848] capitalize font-poppins'>home</NavLink>
                                <NavLink to='/products' className='text-base text-[#484848] capitalize font-poppins'>shop</NavLink>
                            </>
                        )}
                    </nav>

                    {/* Icons */}
                    {!isAuthPage && (
                        <div className='hidden lg:flex items-center gap-6'>
                            <Link><CiSearch size='1.5rem' color='#484848' /></Link>
                            <Link><FaUser size='1.5rem' color='#484848' /></Link>
                            <Link><FaHeart size='1.5rem' color='#484848' /></Link>
                            <Link to='/cart'><BsMinecartLoaded size='1.5rem' color='#484848' /></Link>
                        </div>
                    )}

                    {/* Hamburger Button */}
                    <button className='lg:hidden' onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <FaTimes size='1.5rem' /> : <FaBars size='1.5rem' />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className='lg:hidden mt-4 flex flex-col gap-4'>
                        {isAuthPage ? (
                            <>
                                <NavLink to='/' onClick={toggleMobileMenu}>Home</NavLink>
                                <NavLink to='/' onClick={toggleMobileMenu}>Deals</NavLink>
                                <NavLink to='/' onClick={toggleMobileMenu}>New Arrivals</NavLink>
                                <NavLink to='/' onClick={toggleMobileMenu}>Packages</NavLink>
                                <NavLink to='/login' onClick={toggleMobileMenu}>Sign In</NavLink>
                                <NavLink to='/register' onClick={toggleMobileMenu}>Sign Up</NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to='/' onClick={toggleMobileMenu}>Home</NavLink>
                                <NavLink to='/products' onClick={toggleMobileMenu}>Shop</NavLink>
                                <div className='flex gap-4 mt-2'>
                                    <Link><CiSearch size='1.5rem' color='#484848' /></Link>
                                    <Link><FaUser size='1.5rem' color='#484848' /></Link>
                                    <Link><FaHeart size='1.5rem' color='#484848' /></Link>
                                    <Link to='/cart'><BsMinecartLoaded size='1.5rem' color='#484848' /></Link>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

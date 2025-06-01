import React from 'react';
import { Link, NavLink } from 'react-router';

const Footer = () => {
  return (
    <div className="w-full bg-white pt-8 pb-5 border-t border-[#d9d9d9]">
      <div className="container mx-auto px-4">
        {/* Top section: logo + nav */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 pb-6">
          {/* Logo */}
          <div className="logo_wrapper">
            <Link to="/">
              <h3 className="text-3xl text-[#484848] uppercase font-normal">charm</h3>
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center lg:justify-end items-center gap-4 sm:gap-6 md:gap-8">
            <NavLink to="/" className="text-sm sm:text-base text-[#484848] capitalize font-normal font-poppins">support center</NavLink>
            <NavLink to="/" className="text-sm sm:text-base text-[#484848] capitalize font-normal font-poppins">invoicing</NavLink>
            <NavLink to="/" className="text-sm sm:text-base text-[#484848] capitalize font-normal font-poppins">contact</NavLink>
            <NavLink to="/" className="text-sm sm:text-base text-[#484848] capitalize font-normal font-poppins">careers</NavLink>
            <NavLink to="/" className="text-sm sm:text-base text-[#484848] capitalize font-normal font-poppins">blog</NavLink>
            <NavLink to="/" className="text-sm sm:text-base text-[#484848] capitalize font-normal font-poppins">FAQs</NavLink>
          </nav>
        </div>

        {/* Bottom copyright */}
        <div className="flex justify-center text-center">
          <p className="text-xs sm:text-sm text-[#484848] font-poppins font-normal">
            &copy; 2025 Charm. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

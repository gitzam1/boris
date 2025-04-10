'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '@/assets/boris.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className='bg-[#E2E6EA] border-b border-gray-400'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className='md:hidden p-2 text-gray-700 hover:bg-gray-300 rounded-md'
          >
            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-16 6h16' />
            </svg>
          </button>

          {/* Logo and Title */}
          <div className='flex items-center'>
            <Image src={logo} alt='Boris logo' width={40} height={40} className='h-10 w-auto' />
            <span className='ml-2 text-xl font-bold text-gray-700'>Boris</span>
          </div>

          {/* Desktop Menu - Justify Left */}
          <div className='hidden md:flex flex-1 ml-8'>
            <div className='flex space-x-4'>
              <a href='/' className='text-gray-700 hover:text-gray-900'>Home</a>
              <a href='/about' className='text-gray-700 hover:text-gray-900'>About</a>
              <a href='/contact' className='text-gray-700 hover:text-gray-900'>Contact</a>
            </div>
          </div>

          {/* Login/Logout Button */}
          <div className='hidden md:block'>
            <button
              onClick={handleLogin}
              className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600'
            >
              {isLoggedIn ? 'Logout' : 'Login/Sign up'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-[#E2E6EA] p-4'>
          <a href='/' className='block text-gray-700 py-2'>Home</a>
          <a href='/about' className='block text-gray-700 py-2'>About</a>
          <a href='/contact' className='block text-gray-700 py-2'>Contact</a>
          <button
            onClick={handleLogin}
            className='w-full bg-gray-500 text-white mt-2 py-2 rounded-md hover:bg-gray-600'
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

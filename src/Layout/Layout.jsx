import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <header className='fixed top-0 w-screen'>
        <nav className='bg-slate-900 text-white'>
          <ul className='flex mx-6  items-center justify-end'>
            <Link to='/login'>
              <li className='px-6 py-3 hover:cursor-pointer hover:bg-slate-600'>
                Login
              </li>
            </Link>
            <Link to='/register'>
              <li className='px-6 py-3 hover:cursor-pointer hover:bg-slate-600'>
                Register
              </li>
            </Link>
          </ul>
        </nav>
      </header>

      <main className=' bg-gray-950'>
        {children}
      </main>


    </>
  );
};

export default Layout;

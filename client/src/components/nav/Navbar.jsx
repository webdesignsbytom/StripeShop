import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Icons
import { IoMdMenu } from 'react-icons/io';
// Images
import MainLogoImage from '../../assets/images/logos/byte-toast-studio-logo-web-developer-transparent-svg.svg';
// Context
import { useUser } from '../../context/UserContext';
// Constants
import {
  CompanyName,
  HOME_PAGE_URL,
} from '../../utils/Constants';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';
// Nav data
import { getNavLinkItemsArray } from '../../utils/data/NavData';

function Navbar() {
  const { user, setUser } = useUser();
  const navigateToPage = useNavigateToPage();
  const navLinkItemsArray = getNavLinkItemsArray(user);

  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);

  const togglePhoneNav = () => {
    setIsPhoneNavOpen((prev) => !prev);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
    navigateToPage(HOME_PAGE_URL, { replace: true });
  };

  return (
    <nav
      role='navigation'
      aria-label='Main Navigation'
      className='relative bg-nav-background shadow-md h-fit'
    >
      <section className='grid grid-cols-reg px-4 py-4'>
        <section>
          <NavLink to={HOME_PAGE_URL}>
            <img
              src={MainLogoImage}
              alt={`${CompanyName} business logo - White Logo`}
              className='min-w-10 w-10 h-10 cursor-pointer active:scale-95'
            />
          </NavLink>
        </section>

        <section className='grid justify-end'>
          {/* Mobile screen */}
          <button
            aria-label='Toggle navigation menu'
            onClick={togglePhoneNav}
            className='grid md:hidden w-fit h-fit items-center justify-center text-4xl text-white cursor-pointer'
          >
            <IoMdMenu className='active:scale-90 duration-300' />
          </button>

          {/* Large screen */}
          <ul className='hidden md:grid grid-flow-col gap-6 items-center text-orange-600'>
            {navLinkItemsArray.map(({ path, label }) => (
              <NavItem key={label} url={path} title={label} />
            ))}
            {user?.email && (
              <li>
                <button
                  className='hover:text-colour2 active:scale-95'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </section>
      </section>

      {/* Phone navbar */}
      <section
        className={`phone-nav absolute top-full left-0 w-full bg-nav-background transition-transform duration-300 ${
          isPhoneNavOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <ul className='grid gap-8 items-center justify-center text-center text-orange-600 py-10'>
          {navLinkItemsArray.map(({ path, label }) => (
            <NavItem key={label} url={path} title={label} />
          ))}
          {user?.email && (
            <li>
              <button
                className='w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-yellow-500 text-gray-800 font-semibold'
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </section>
    </nav>
  );
}

const NavItem = ({ url, title }) => {
  return (
    <li className='active:scale-90'>
      <NavLink
        to={url}
        aria-label={`${title} page navigation tab`}
        className='text-xl md:text-lg font-semibold font-poppins hover:brightness-90 duration-200 active:scale-75'
        aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        style={({ isActive }) => {
          return isActive ? { color: '#f8fafc' } : {};
        }}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default Navbar;

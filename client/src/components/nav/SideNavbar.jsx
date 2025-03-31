import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
// Constants
import { CompanyName } from '../../utils/Constants';
// Icons
import CalendarIcon from '../../assets/images/icons/calendar-icon.svg';
import ChecklistIcon from '../../assets/images/icons/checklist-icon.svg';
import HomeIcon from '../../assets/images/icons/home-icon.svg';
import DropdownIcon from '../../assets/images/icons/chevron-down-icon.svg';
import DashboardIcon from '../../assets/images/icons/dashboard-icon.svg';
import ProfileIcon from '../../assets/images/icons/person-rounded-icon.svg';
import CreateFolderIcon from '../../assets/images/icons/create-folder-icon.svg';

// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function SideNavbar({ darkTheme }) {
  const toggleRef = useRef();
  const navRef = useRef();
  const [isClosed, setIsClosed] = useState(false);
  const [openedIndex, setOpenedIndex] = useState(null);
  const navigateToPage = useNavigateToPage();

  useEffect(() => {
    if (!isClosed && openedIndex !== null) {
      const menuId = `dropdown_button_${openedIndex}`;
      const menuSelected = document.getElementById(menuId);
      console.log('menuSelected', menuSelected);
      
      if (menuSelected) {
        const icon = menuSelected.querySelector('.down_icon img');
        if (icon) {
          icon.classList.toggle('rotate');
        }

        const menu = menuSelected.querySelector('ul');
        if (menu) {
          menu.classList.toggle('show');
        }
      }
    }
  }, [isClosed, openedIndex]);

  const toggleSidebar = () => {
    toggleRef.current.classList.toggle('rotate');
    navRef.current.classList.toggle('close');
    setIsClosed(!isClosed);
  };

  const toggleDropdownMenu = (menuId) => {
    const menuSelected = document.getElementById(menuId);
    const icon = menuSelected.querySelector('.down_icon img');
    if (icon) {
      icon.classList.toggle('rotate');
    }

    const menu = menuSelected.querySelector('ul');
    if (menu) {
      menu.classList.toggle('show');
    }
  };

  const toggleOpenFromMenu = (menuId, index) => {
    toggleRef.current.classList.toggle('rotate');
    navRef.current.classList.toggle('close');
    setOpenedIndex(index); // Set the opened index

    const menuSelected = document.getElementById(menuId);
    console.log('menuSelected', menuSelected);
  };

  const navOptions = [
    { label: 'Home', link: '/', icon: HomeIcon },
    { label: 'Dashboard', link: 'dashboard.html', icon: DashboardIcon },
    {
      label: 'Create',
      subItems: [
        { label: 'Folder', link: '#' },
        { label: 'Document', link: '#' },
        { label: 'Project', link: '#' },
      ],
      icon: CreateFolderIcon,
    },
    {
      label: 'Todo-Lists',
      subItems: [
        { label: 'Work', link: '#' },
        { label: 'Private', link: '#' },
        { label: 'Coding', link: '#' },
        { label: 'Gardening', link: '#' },
        { label: 'School', link: '#' },
      ],
      icon: ChecklistIcon,
    },
    { label: 'Calendar', link: 'calendar.html', icon: CalendarIcon },
    { label: 'Profile', link: 'profile.html', icon: ProfileIcon },
  ];

  return (
    <nav
      id='sidenav_container'
      ref={navRef}
      className={`grid grid-rows-reg border-r-2 border-solid border-border-main-dark`}
    >
      <section className='grid h-fit'>
        <div className='grid grid-cols-rev p-1 items-center'>
          <span className='logo pl-2'>{CompanyName}</span>
          <button
            onClick={toggleSidebar}
            id='toggle-btn'
            ref={toggleRef}
            className='bg-none rounded-full hover:bg-hover-colour-dark mx-auto p-1'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 -960 960 960'
              width='24px'
              fill='#e8eaed'
            >
              <path d='m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z' />
            </svg>
          </button>
        </div>
      </section>

      <section className='grid w-full h-full overflow-hidden'>
        <ul className='grid gap-2 w-full h-fit overflow-hidden'>
          {navOptions.map((item, index) => (
            <li key={index} className='text-nowrap cursor-pointer'>
              {isClosed ? (
                <div
                  onClick={
                    item.subItems
                      ? () => {
                          setIsClosed(false);
                          toggleOpenFromMenu(`dropdown_button_${index}`, index);
                        }
                      : () => navigateToPage(item.link)
                  }
                  className='grid items-center justify-start py-2 px-4 hover:brightness-125'
                >
                  <img
                    title={item.label}
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className='w-6 h-6 min-w-6 min-h-6'
                  />
                </div>
              ) : item.subItems ? (
                <div id={`dropdown_button_${index}`}>
                  <button
                    className='grid gap-2 grid-cols-a1a w-full py-2 pl-4 pr-2 hover:brightness-125'
                    onClick={() =>
                      toggleDropdownMenu(`dropdown_button_${index}`)
                    }
                  >
                    <div>
                      <img
                        src={item.icon}
                        alt={`${item.label} dropdown menu icon button`}
                        className='w-6 h-6 min-w-6 min-h-6'
                      />
                    </div>
                    <div className='text-start'>
                      <span>{item.label}</span>
                    </div>
                    <div className='down_icon'>
                      <img
                        src={DropdownIcon}
                        alt='Dropdown menu down arrow icon'
                        className='w-6 h-6 min-w-6 min-h-6'
                      />
                    </div>
                  </button>
                  <ul className='sub_menu'>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className='pl-4 hover:brightness-125'>
                        <a href={subItem.link}>{subItem.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavItem item={item} />
              )}
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
}
const NavItem = ({ item }) => {
  return (
    <section>
      <NavLink
        to={item.link}
        aria-label={`${item.label} page navigation tab`}
        aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        style={({ isActive }) => {
          return isActive ? { color: '#f8fafc' } : {};
        }}
      >
        <div className='grid grid-cols-reg gap-2 w-full py-2 px-4 hover:brightness-125'>
          <div className=''>
            <img
              src={item.icon}
              alt={`${item.label} dropdown menu icon button`}
              className='w-6 h-6 min-w-6 min-h-6'
            />
          </div>
          <div>
            <span>{item.label}</span>
          </div>
        </div>
      </NavLink>
    </section>
  );
};

export default SideNavbar;

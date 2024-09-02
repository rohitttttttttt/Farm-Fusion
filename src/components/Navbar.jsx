import React, { useState } from 'react';
import { FaBars, FaTimes, FaBell, FaComments, FaSearch } from 'react-icons/fa';
import { Link , useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Dashboard', href: '/FarmerDashboard', current: false },
  { name: 'Tutorial', href: '/VideoTutorials', current: false },
  { name: 'Cart', href: '/cart', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMSGclick = () => {
    navigate('/ChatInterface')
  }
  const handleProfileclick = () => {
    navigate('/ProfileSection')
  }
  const handleSearch = () => {
    console.log('Search button clicked');
  
  };
  /*const handleTutorialClick = () => {
    navigate('/VideoTutorials')
  }
*/
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FaTimes className="icon" aria-hidden="true" />
          ) : (
            <FaBars className="icon" aria-hidden="true" />
          )}
        </button>

        <div className="logo">
          <img alt="Your Company" src={logo} />
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button" onClick={handleSearch}>
            <FaSearch className="icon" aria-hidden="true" />
          </button>
        </div>

        <div className="desktop-menu">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current ? 'nav-current' : 'nav-link',
                'nav-link'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="profile-section">
          <button className="message-button" onClick={handleMSGclick}>
            <FaComments className="icon" aria-hidden="true" />
          </button>
          <div className="profile-menu" onClick={handleProfileclick}>
            <img
              alt="User Profile"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="profile-img"
            />
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                Your Profile
              </a>
              <a href="#" className="dropdown-item">
                Settings
              </a>
              <a href="#" className="dropdown-item">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current ? 'nav-current' : 'mobile-nav-link',
                'mobile-nav-link'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

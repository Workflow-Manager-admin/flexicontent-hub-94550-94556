import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/**
 * Header component for FlexiContent Hub
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onMenuClick - Function to toggle sidebar visibility
 * @returns {JSX.Element} Rendered Header component
 */
const Header = ({ onMenuClick }) => {
  return (
    <header className="flexi-header">
      <div className="flexi-header-left">
        <button className="menu-toggle" onClick={onMenuClick}>
          <span className="menu-icon">≡</span>
        </button>
        <Link to="/" className="flexi-logo">
          <span className="logo-symbol">*</span>
          <span className="logo-text">FlexiContent Hub</span>
        </Link>
      </div>
      <div className="flexi-header-middle">
        <div className="search-bar">
          <input type="text" placeholder="Search content..." />
          <button className="search-button">🔍</button>
        </div>
      </div>
      <div className="flexi-header-right">
        <button className="header-action-btn">
          <span className="action-icon">+</span>
          <span className="action-text">New Content</span>
        </button>
        <div className="user-menu">
          <div className="user-avatar">KA</div>
          <div className="user-dropdown">
            <span className="user-name">Admin</span>
            <span className="dropdown-icon">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import './Sidebar.css';

/**
 * Sidebar navigation component for FlexiContent Hub
 * 
 * @returns {JSX.Element} Rendered Sidebar component
 */
const Sidebar = () => {
  const { sidebarCollapsed } = useAppContext();
  
  // Navigation menu items
  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '📄', label: 'Content', path: '/content' },
    { icon: '🖼️', label: 'Media', path: '/media' },
    { icon: '👥', label: 'Users', path: '/users' },
    { icon: '⚙️', label: 'Settings', path: '/settings' }
  ];

  return (
    <aside className={`flexi-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="sidebar-menu-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    isActive ? 'sidebar-link active' : 'sidebar-link'
                  }
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  {!sidebarCollapsed && <span className="sidebar-label">{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-footer">
          {!sidebarCollapsed && (
            <>
              <div className="sidebar-footer-item">
                <span className="sidebar-footer-icon">?</span>
                <span className="sidebar-footer-text">Help & Support</span>
              </div>
              <div className="version">v1.0.0</div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

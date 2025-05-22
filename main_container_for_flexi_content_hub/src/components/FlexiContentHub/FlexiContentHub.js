import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';
import './FlexiContentHub.css';

/**
 * FlexiContentHub - Main container component for the FlexiContent CMS
 * 
 * This is the primary container component that renders the overall layout
 * of the FlexiContent Hub CMS, including header, sidebar, and content area.
 * 
 * @returns {JSX.Element} The rendered FlexiContentHub container
 */
const FlexiContentHub = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <Router>
      <div className="flexi-content-hub">
        <Header onMenuClick={toggleSidebar} />
        <div className="flexi-content-main">
          <Sidebar collapsed={sidebarCollapsed} />
          <div className={`flexi-content-area ${sidebarCollapsed ? 'expanded' : ''}`}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/content" element={<ContentPlaceholder title="Content Management" />} />
              <Route path="/media" element={<ContentPlaceholder title="Media Library" />} />
              <Route path="/users" element={<ContentPlaceholder title="User Management" />} />
              <Route path="/settings" element={<ContentPlaceholder title="Settings" />} />
              <Route path="*" element={<ContentPlaceholder title="Page Not Found" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

// Temporary component for placeholder content
const ContentPlaceholder = ({ title }) => (
  <div className="content-placeholder">
    <h2>{title}</h2>
    <p>This section is under development.</p>
  </div>
);

export default FlexiContentHub;

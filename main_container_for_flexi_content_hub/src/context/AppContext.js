import React, { createContext, useContext, useState } from 'react';

/**
 * Application Context for managing global state
 */
const AppContext = createContext();

/**
 * Custom hook to use the App Context
 * 
 * @returns {Object} The context value
 */
export const useAppContext = () => {
  return useContext(AppContext);
};

/**
 * AppProvider component to wrap the application with context
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Provider component
 */
export const AppProvider = ({ children }) => {
  // State for sidebar collapse
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // State for user information
  const [user, setUser] = useState({
    name: 'Admin User',
    avatar: 'AU',
    role: 'Administrator'
  });
  
  // State for content statistics
  const [contentStats, setContentStats] = useState({
    published: 24,
    draft: 8,
    media: 67,
    users: 12
  });

  /**
   * Toggle sidebar collapsed state
   */
  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };

  // Context value
  const value = {
    sidebarCollapsed,
    toggleSidebar,
    user,
    setUser,
    contentStats,
    setContentStats
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

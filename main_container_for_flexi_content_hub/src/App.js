import React from 'react';
import './App.css';
import FlexiContentHub from './components/FlexiContentHub/FlexiContentHub';
import { AppProvider } from './context/AppContext';

/**
 * Main App component that renders the FlexiContentHub CMS
 * 
 * @returns {JSX.Element} The rendered App
 */
function App() {
  return (
    <div className="app">
      <AppProvider>
        <FlexiContentHub />
      </AppProvider>
    </div>
  );
}

export default App;
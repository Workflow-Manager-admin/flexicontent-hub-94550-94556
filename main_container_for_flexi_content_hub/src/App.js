import React from 'react';
import './App.css';
import FlexiContentHub from './components/FlexiContentHub/FlexiContentHub';

/**
 * Main App component that renders the FlexiContentHub CMS
 * 
 * @returns {JSX.Element} The rendered App
 */
function App() {
  return (
    <div className="app">
      <FlexiContentHub />
    </div>
  );
}

export default App;
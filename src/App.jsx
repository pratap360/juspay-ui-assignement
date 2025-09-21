
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import OrderList from './components/Orderlist';
import Dashboard from './components/leftpanel/dashboard/dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [leftPanelOpen, setLeftPanelOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home 
          onNavigate={setCurrentPage}
          leftPanelOpen={leftPanelOpen}
          setLeftPanelOpen={setLeftPanelOpen}
          rightPanelOpen={rightPanelOpen}
          setRightPanelOpen={setRightPanelOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />;
      case 'orders':
        return <OrderList 
          onNavigate={setCurrentPage}
          leftPanelOpen={leftPanelOpen}
          setLeftPanelOpen={setLeftPanelOpen}
          rightPanelOpen={rightPanelOpen}
          setRightPanelOpen={setRightPanelOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />;
      default:
        return <Home 
          onNavigate={setCurrentPage}
          leftPanelOpen={leftPanelOpen}
          setLeftPanelOpen={setLeftPanelOpen}
          rightPanelOpen={rightPanelOpen}
          setRightPanelOpen={setRightPanelOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />;
    }
  };

  return renderPage();
}

export default App;

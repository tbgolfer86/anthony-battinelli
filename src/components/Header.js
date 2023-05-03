import React, { useState } from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h1>Anthony Battinelli</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <div className='content'>
        {renderPage()}
      </div>
    </div>
  );
}

export default Header;
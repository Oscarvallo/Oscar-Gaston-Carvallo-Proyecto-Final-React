// Layout.jsx
import React from 'react';
import NavSearch from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css'; 

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className='Navbar'>
        <NavSearch />
      </div>
      <div >
        {children}
      </div>
      
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

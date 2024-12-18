import React from 'react';
import '../../css/components/Footer/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
import React from 'react';

import facebook from '../assets/Facebook.png';
import instagram from '../assets/Instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">Copyright by Coders Lab</p>
      <div className="footer_icons">
        <img src={facebook} alt="facebook icon" className="facebook_icon" />
        <img src={instagram} alt="instagram icon" className="instagram_icon" />
      </div>
    </footer>
  );
};

export default Footer;

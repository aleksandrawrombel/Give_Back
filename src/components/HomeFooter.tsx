import React from 'react';

import facebook from '../assets/Facebook.png';
import instagram from '../assets/Instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">Copyright by Coders Lab</p>
      <div className="footer_icons">
        <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="facebook icon" className="facebook_icon" /></a>
        <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="instagram icon" className="instagram_icon" /></a>
      </div>
    </footer>
  );
};

export default Footer;

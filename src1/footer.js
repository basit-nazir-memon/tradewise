import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
      <div>
        <h4>About Us</h4>
        <p>We are a fantastic company doing amazing things.</p>
      </div>
      <div>
        <h4>Agreement</h4>
        <p>Read our terms and conditions.</p>
      </div>
      <div>
        <h4>Join Us on Social Media</h4>
        <div>
          <a href="YOUR_WHATSAPP_LINK_HERE" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={{ marginRight: '10px', fontSize: '24px', color: '#25D366' }} />
          </a>
          <a href="YOUR_FACEBOOK_LINK_HERE" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ marginRight: '10px', fontSize: '24px', color: '#1877F2' }} />
          </a>
          <a href="YOUR_INSTAGRAM_LINK_HERE" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ marginRight: '10px', fontSize: '24px', color: '#E1306C' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

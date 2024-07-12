import React from 'react';

const Footer = () => {
  const footerStyles = {
    container: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '0.5rem 0',
      textAlign: 'center',
      width: '100%',
      boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
      fontSize: '0.75rem',
    },
    section: {
      marginBottom: '0.5rem',
    },
    heading: {
      fontSize: '0.875rem',
      marginBottom: '0.25rem',
    },
    linkList: {
      listStyleType: 'none',
      padding: '0',
      margin: '0.25rem 0',
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
    },
    link: {
      color: '#ffcc00',
      textDecoration: 'none',
    },
    socialMedia: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '0.5rem',
    },
    socialIcon: {
      color: '#ffcc00',
      fontSize: '1rem',
    },
    contactInfo: {
      margin: '0.25rem 0',
    },
  };

  return (
    <div style={footerStyles.container}>
      <div style={footerStyles.section}>
        <h2 style={footerStyles.heading}>Empire-Food</h2>
        <ul style={footerStyles.linkList}>
          <li>
            <a href="/" style={footerStyles.link}>Home</a>
          </li>
          <li>
            <a href="/about" style={footerStyles.link}>About</a>
          </li>
          <li>
            <a href="/contact" style={footerStyles.link}>Contact</a>
          </li>
        </ul>
      </div>
      <div style={footerStyles.section}>
        <h2 style={footerStyles.heading}>Contact Us</h2>
        <p style={footerStyles.contactInfo}>Email: support@empirefood.com</p>
        <p style={footerStyles.contactInfo}>Phone: +91 8730842713</p>
      </div>
      <div style={footerStyles.section}>
        <h2 style={footerStyles.heading}>Follow Us</h2>
        <div style={footerStyles.socialMedia}>
          <a href="https://facebook.com" style={footerStyles.socialIcon}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" style={footerStyles.socialIcon}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" style={footerStyles.socialIcon}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" style={footerStyles.socialIcon}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <p style={footerStyles.contactInfo}>
        &copy; 2024 Empire-Food. All rights reserved. Created by <a href="https://yourportfolio.com" style={footerStyles.link}>Ankan Deb</a>.
      </p>
    </div>
  );
};

export default Footer;

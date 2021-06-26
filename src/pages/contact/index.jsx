import React from 'react';
import SocialMedia from './components/socialMedia';

function ContactPage() {
  return (
    <div className="contact-main" style={styles.main}>
      <h1 style={styles.header}>Contact SOCIS</h1>
      <p style={styles.description}>
        We would love to hear your comments, questions, suggestions, or feedback! Please email us at
        {' '}
        <a href="mailto:exec@socis.ca" style={styles.link}>exec@socis.ca</a>
        .
      </p>
      <SocialMedia />
    </div>
  );
}

const styles = {
  main: {
    paddingBottom: '15vh',
  },
  header: {
    textAlign: 'center',
    marginTop: '10vh',
    fontSize: '54px',
  },
  description: {
    textAlign: 'center',
    fontSize: '22px',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
};

export default ContactPage;

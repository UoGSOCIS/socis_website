import React from 'react';
import { NavBar } from '../../components';
import SocialMedia from './components/socialMedia';

function ContactPage() {
  return (
    <div className="contact">
      <NavBar />
      <h1 style={styles.header}>Contact SOCIS</h1>
      <p style={styles.description}>
        We would love to hear your comments, questions, suggestions, or feedback! Please email us at
        {' '}
        <a href="mailto:exec@socis.ca">exec@socis.ca</a>
        .
      </p>
      <SocialMedia />
    </div>
  );
}

const styles = {
  header: {
    textAlign: 'center',
    marginTop: '15vh',
    fontSize: '54px',
  },
  description: {
    textAlign: 'center',
    fontSize: '22px',
  },
};

export default ContactPage;

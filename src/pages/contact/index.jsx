import React from 'react';
import { NavBar } from '../../components';
import SocialMedia from './components/socialMedia';

function ContactPage() {
  return (
    <div className="contact">
      <NavBar />
      <h1 style={styles.header}>Contact Page</h1>
      <p style={styles.description}>
        {/* eslint-disable-next-line max-len */}
        For immediate inquiries please reach out to us at exec@socis.ca. Also follow us on social media! For students
        we are located at Reynold 0010, pop by to say hi!
      </p>
      <SocialMedia />
    </div>
  );
}

const styles = {
  header: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
};

export default ContactPage;

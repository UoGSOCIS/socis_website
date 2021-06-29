import React from 'react';
import styled from 'styled-components';

function NewAffiliate() {
  return (
    <ContactText>
      Interested in becoming an affiliated club?
      {' '}
      <a href="/contact" style={{ color: 'black', textDecoration: 'none' }}>Contact us</a>
      {' '}
      today!
    </ContactText>
  );
}

const ContactText = styled.p`
  margin-top: 10vh;
  margin-bottom: 10vh;
  font-size: 28px;
  text-align: center;
`;

export default NewAffiliate;

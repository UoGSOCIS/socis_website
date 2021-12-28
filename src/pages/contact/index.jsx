import React from 'react';
import styled from 'styled-components';
import SocialMedia from './components/socialMedia';
import {
  NavBar, ContentWrapper, SubpageText, SubpageTitle,
} from '../../components';

function ContactPage() {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <SubpageTitle>Contact SOCIS</SubpageTitle>
        <SubpageText>
          We would love to hear your comments, questions, suggestions, or feedback! Please email us at
          {' '}
          <SubtextLink href="mailto:exec@socis.ca">exec@socis.ca</SubtextLink>
          .
        </SubpageText>
        <SocialMedia />
      </ContentWrapper>
    </>
  );
}

const SubtextLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default ContactPage;

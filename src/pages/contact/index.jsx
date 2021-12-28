import React from 'react';
import styled from 'styled-components';
import SocialMedia from './components/socialMedia';
import { ContentWrapper } from '../../components';

function ContactPage() {
  return (
    <ContentWrapper>
      <Title>Contact SOCIS</Title>
      <Subtext>
        We would love to hear your comments, questions, suggestions, or feedback! Please email us at
        {' '}
        <SubtextLink href="mailto:exec@socis.ca">exec@socis.ca</SubtextLink>
        .
      </Subtext>
      <SocialMedia />
    </ContentWrapper>
  );
}

const Title = styled.p`
  text-align: center;
  margin-top: 10vh;
  font-size: 54px;
`;

const Subtext = styled.p`
  font-size: 22px;
  text-align: center;
`;

const SubtextLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default ContactPage;

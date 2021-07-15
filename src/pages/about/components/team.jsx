import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Team({
  url, position, name, content,
}) {
  return (
    <TeamCard>
      <TeamImage src={url} />
      <TeamCardContentWrapper>
        <TeamCardName>{name}</TeamCardName>
        <TeamCardPosition>{position}</TeamCardPosition>
        <TeamCardDivider />
        <TeamCardContent>{content}</TeamCardContent>
      </TeamCardContentWrapper>
    </TeamCard>
  );
}

const TeamCard = styled.div`
  overflow: hidden;
  width: 20vw;
  min-width: 330px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  box-shadow: 8px 8px 64px 0 rgb(128 130 133 / 25%);
`;

const TeamImage = styled.img`
  border: 0;
  width: 100%;
  vertical-align: middle;
  display: inline-block;
  height: 450px;
  -o-object-fit: cover;
  object-fit: cover;
`;

const TeamCardContentWrapper = styled.div`
  padding: 26px 29px;
`;

const TeamCardName = styled.h6`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;  
`;

const TeamCardPosition = styled.h6`
    margin-top: 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 16px;
    color: #660000;
    text-transform: uppercase;
`;

const TeamCardDivider = styled.div`
  width: 48px;
  margin-bottom: 24px;
  height: 2px;
  background-image: linear-gradient(90deg, #990100, #660000);
`;

const TeamCardContent = styled.p`
  margin-bottom: 0;
  line-height: 22px;
  font-weight: 300;
  letter-spacing: .2px;
  white-space: break-spaces;
  margin-top: 0;
  padding-top: 10px;
  color: rgba(20,16,14,.8);
  font-size: 18px;
`;

Team.propTypes = {
  url: PropTypes.string,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Team.defaultProps = {
  url: '',
};

export default Team;

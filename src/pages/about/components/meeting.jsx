import React from 'react';

function Meeting() {
  return (
    <>
      <h1>Meeting Information</h1>
      <p>
        We meet every Thursday at 5:30pm in Reynolds 0001. Join #socis on
        {' '}
        <a href="https://gryph.slack.com" rel="noopener noreferrer" target="_blank" style={style}>GryphSlack</a>
        {' '}
        or follow our
        {' '}
        <a href="https://www.instagram.com/socis.uog" rel="noopener noreferrer" target="_blank" style={style}>Instagram</a>
        {' '}
        for the latest meeting information.
      </p>
    </>
  );
}

const style = {
  textDecoration: 'none',
  color: 'black',
};

export default Meeting;

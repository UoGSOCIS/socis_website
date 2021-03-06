import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function FileViewer({ file }) {
  return (
    <StyledContainer>
      <object data={file} type="application/pdf" style={{ width: '100%', height: '100%' }}>
        <p>
          It appears you do not have a PDF plugin for this browser. No biggie... you can
          {' '}
          <a href={file}>click here to download the PDF file.</a>
        </p>
      </object>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
 height: 85vh;
`;

export default FileViewer;

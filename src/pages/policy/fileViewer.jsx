import React from 'react';
import Container from '@material-ui/core/Container';

// eslint-disable-next-line react/prop-types
function FileViewer({ file }) {
  return (
    <Container style={styles.container}>
      <object data={file} type="application/pdf" style={styles.object}>
        <p>
          It appears you do not have a PDF plugin for this browser. No biggie... you can
          <a href={file}>
            click here to download the PDF
            file.
          </a>
        </p>
      </object>
    </Container>
  );
}

const styles = {
  container: {
    height: '100vh',
    paddingBottom: '10vh',
  },
  object: {
    width: '100%',
    height: '100%',
  },
};

export default FileViewer;

import React from 'react';
import Box from '@material-ui/core/Box';
import HeaderMessage from './BannerMessage';

function Banner() {
  return (
    <div className="homeHeading" style={styles.heading}>
      <Box
        display="flex"
        width="100%"
        height="75%"
      >
        <Box m="auto">
          <HeaderMessage />
        </Box>
      </Box>
    </div>
  );
}

const styles = {
  heading: {
    height: '100%',
  },
};

export default Banner;

import React from 'react';
import Box from '@material-ui/core/Box';
import HeaderMessage from './BannerMessage';

function Banner() {
  return (
    <div className="homeHeading" style={styles.banner}>
      <Box
        display="flex"
        width="100%"
        height="85%"
      >
        <Box m="auto">
          <HeaderMessage />
        </Box>
      </Box>
    </div>
  );
}

const styles = {
  banner: {
    backgroundColor: '#660000',
    height: '100%',
  },
};

export default Banner;

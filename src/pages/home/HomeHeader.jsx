import React from 'react';
import Box from '@material-ui/core/Box';

function HomeHeader() {
  return (
    <div className="homeHeading">
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

const HeaderMessage = () => {
  const { width } = useViewport();
  const breakpoint = 500;

  return (
    <h1 style={styles.message}>
      {
                width > breakpoint
                  ? 'We are the Society of Computing and Information Science'
                  : ('We are SOCIS')
            }
    </h1>
  );
};

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};

const styles = {
  message: {
    color: 'white',
    marginTop: 0,
    fontSize: '54px',
    marginLeft: '0.5vw',
    marginRight: '0.1vw',
  },
};

export default HomeHeader;

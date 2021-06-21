import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import PropTypes from 'prop-types';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    width: '100%',
    marginBottom: '5vh',
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      minWidth: '400px',
      maxWidth: '800px',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

function ExecCard({
  url, position, name, content,
}) {
  const styles = useStyles();
  const { ...contentStyles } = useBlogTextInfoContentStyles();
  return (
    <Card className={(styles.root)}>
      <CardMedia
        className={styles.media}
        image={url}
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={position}
          heading={name}
          body={content}
        />
      </CardContent>
    </Card>
  );
}

ExecCard.propTypes = {
  url: PropTypes.string,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

ExecCard.defaultProps = {
  url: '',
};

export default ExecCard;

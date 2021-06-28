import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FontAwesomeLink({ icon, href, size }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} size={size} style={{ color: 'black' }} />
    </a>
  );
}

FontAwesomeLink.defaultProps = {
  href: '/404',
  size: '3x',
};

FontAwesomeLink.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.any.isRequired,
  href: PropTypes.string,
  size: PropTypes.string,
};

export default FontAwesomeLink;

/* eslint-disable react/prop-types */
import React from 'react';

function Wrapper({
  className = '', viewBox = '0 0 24 24', style = {}, fill = '#0000', children,
}) {
  return (
    <svg className={`fill-current ${className}`} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" style={style} fill={fill}>
      {children}
    </svg>
  );
}

function DoubleDownIcon(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper {...props} style={{ height: '2rem', width: '2.5rem' }} fill="#ffff">
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <polygon points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41" />
          <polygon points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19" />
        </g>
      </g>
    </Wrapper>
  );
}

export default DoubleDownIcon;

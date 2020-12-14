import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const FontIcon = ({
  rotate180,
  rotate90,
  rotate45,
  iconColor,
  onClick,
  library,
  style,
  icon,
  size,
}) => {
  const modify = classNames({
    ' font-icon--rotate180': rotate180,
    ' font-icon--rotate90': rotate90,
    ' font-icon--rotate45': rotate45,
    [` font-icon--color-${iconColor}`]: iconColor,
    [` font-icon--${size}`]: size,
  });

  return (
    <i
      className={`${library} font-icon${modify}`}
      style={style}
      onClick={onClick}
    >
      {icon}
    </i>
  );
};

FontIcon.propTypes = {
  iconColor: types.oneOf(['white', 'green', 'grey']),
  rotate180: types.bool,
  rotate90: types.bool,
  rotate45: types.bool,
  library: types.string.isRequired,
  onClick: types.func,
  icon: types.string.isRequired,
  size: types.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
    'xxxxl',
    'max',
  ]),
};

FontIcon.defaultProps = {
  iconColor: 'grey',
  library: 'material-icons',
  size: 'md',
};

import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

import '../../styles/index.scss';
import './styles.scss';

export const LoginButton = ({
  className,
  borderRadius,
  borderColor,
  bgColor,
  color,
  minHeight,
  maxWidth,
  minWidth,
  fontSize,
  uppercase,
  children,
  onClick,
}) => {
  const modify = classNames({
    'login-button--border-radius': borderRadius,
    'login-button--border-color': borderColor,
    [`login-button--bg-color-${bgColor}`]: bgColor,
    [`login-button--color-${color}`]: color,
    'login-button--uppercase': uppercase,
    onClick,
  });

  return (
    <button
      className={`login-button ${className}__login-button ${modify}`}
      onClick={onClick}
      style={{
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`,
        minHeight: `${minHeight}px`,
        fontSize: `${fontSize}rem`,
      }}
    >
      {children}
    </button>
  );
};

LoginButton.propTypes = {
  className: types.string.isRequired,
  borderRadius: types.bool,
  borderColor: types.bool,
  bgColor: types.oneOf(['white', 'primaryGreen', 'primaryBlue', 'transparent']),
  color: types.oneOf(['white', 'textPrimary']),
  maxWidth: types.string,
  minWidth: types.string,
  minHeight: types.string,
  fontSize: types.string,
  uppercase: types.bool,
  children: types.any,
  prop: types.string,
};

LoginButton.defaultProps = {};

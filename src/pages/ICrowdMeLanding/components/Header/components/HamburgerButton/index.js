import classNames from 'classnames';
import React from 'react';

import './styles.scss';

const HamburgerButton = ({ handleClick, className, isOpen }) => {
  const modify = classNames({
    ' hamburger-btn--open': isOpen,
  });

  return (
    <button
      className={`hamburger-btn ${className}${modify}`}
      onClick={handleClick}
    >
      <p />
      <p />
      <p />
    </button>
  );
};

export default HamburgerButton;

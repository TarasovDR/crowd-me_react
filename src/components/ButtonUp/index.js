import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Hooks

import useCurrentPosition from '../../hooks/useCurrentPosition';

// Components

import { FontIcon } from '../FontIcon';

// Styles

import './styles.scss';

// ----------------
export const ButtonUp = ({ visiblePosition, className }) => {
  // Preparation

  const currentPosition = useCurrentPosition();

  // Handlers

  const scrollTo = (top) =>
    window.scrollTo({
      behavior: 'smooth',
      top,
    });

  // Modify styles

  const modify = classNames({
    ' button-up--visible': currentPosition >= visiblePosition,
  });

  // Render

  return (
    <div
      className={`button-up${modify} ${className}`}
      onClick={() => scrollTo(0)}
    >
      <FontIcon icon="arrow_upward" size="xxl" iconColor="green" />
    </div>
  );
};

// ----------------

// Type of props

ButtonUp.propTypes = {
  visiblePosition: types.number,
  className: types.string,
};

// Default props

ButtonUp.defaultProps = {
  visiblePosition: 200,
  className: '',
};

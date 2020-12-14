import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const Name = props => {
  // Modify styles

  const modify = classNames({
    ' name': props,
  });

  // Render

  return <div className={`name${modify}`} />;
};

// ----------------

// Type of props

Name.propTypes = {
  prop: types.string,
};

// Default value for props

Name.defaultProps = {};

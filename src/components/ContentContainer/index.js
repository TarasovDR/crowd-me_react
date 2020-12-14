import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const ContentContainer = ({ maxWidth, children }) => {
  // Render

  return (
    <div className="content-container">
      <div
        className="content-container__inner-wrapper"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {children}
      </div>
    </div>
  );
};

// ----------------

// Type of props

ContentContainer.propTypes = {
  children: types.node.isRequired,
  maxWidth: types.string,
};

// Default value for props

ContentContainer.defaultProps = {
  maxWidth: '1300',
};

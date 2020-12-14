import classNames from 'classnames';
import { ReactSVG } from 'react-svg';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const Logo = ({ maxWidth, image, svg }) => {
  // Modify styles

  const modify = classNames({
    // ' name': props,
  });

  // Render

  return (
    <div className={`logo${modify}`} style={{ maxWidth: `${maxWidth}px` }}>
      {!!svg && <ReactSVG src={svg} />}
      {!!image && <img src={image} alt="logo-img" />}
    </div>
  );
};

// ----------------

// Type of props

Logo.propTypes = {
  image: types.string,
  svg: types.string,
};

// Default value for props

Logo.defaultProps = {};

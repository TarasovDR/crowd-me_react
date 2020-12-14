import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

import './styles.scss';

export const SectionTitle = ({
  fluidWidth,
  maxWidth,
  className,
  title,
  align,
  color,
  fontSize,
}) => {
  const modify = classNames({
    'section-title--fluid-width': fluidWidth,
    [` section-title--align-${align}`]: align,
    [` section-title--color-${color}`]: color,
    [` section-title--fontSize-${fontSize}`]: fontSize,
  });

  return (
    <div
      className={`section-title ${className}__section-title ${modify}`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <p className="section-title__title">{title}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  fluidWidth: types.bool,
  maxWidth: types.string,
  title: types.string.isRequired,
  align: types.oneOf(['left', 'center', 'right']),
  color: types.oneOf([
    'primary',
    'secondary',
    'primary-green',
    'secondary-green',
    'white',
  ]),
  fontSize: types.oneOf([
    'hero',
    'works',
    'tabs',
    'search',
    'projects',
    'cards',
    'parts',
    'person',
    'footer',
  ]),
};

SectionTitle.defaultProps = {
  color: 'primary',
  align: 'center',
};

import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

import './styles.scss';

export const SectionSubtitle = ({
  fluidWidth,
  maxWidth,
  className,
  subtitle,
  align,
  color,
  fontSize,
}) => {
  const modify = classNames({
    'section-subtitle--fluid-width': fluidWidth,
    [` section-subtitle--align-${align}`]: align,
    [` section-subtitle--color-${color}`]: color,
    [` section-subtitle--fontSize-${fontSize}`]: fontSize,
  });

  return (
    <div
      className={`section-subtitle ${className}__section-subtitle ${modify}`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <p className="section-subtitle__subtitle">{subtitle}</p>
    </div>
  );
};

SectionSubtitle.propTypes = {
  fluidWidth: types.bool,
  maxWidth: types.string,
  subtitle: types.string.isRequired,
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

SectionSubtitle.defaultProps = {
  color: 'primary',
  align: 'center',
};

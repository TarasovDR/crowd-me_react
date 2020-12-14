import types from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg';

import './styles.scss';

export const SocialBlock = ({ links }) => {
  return (
    <div className="social-block">
      {links.map(({ icon, link }, index) => {
        return (
          <a
            className="social-icon__wrapper"
            target="_blank"
            href={link}
            rel="noopener noreferrer"
            key={index}
          >
            <ReactSVG className="social-icon__icon" src={icon} />
          </a>
        );
      })}
    </div>
  );
};

SocialBlock.propTypes = {
  links: types.array.isRequired,
};

SocialBlock.defaultProps = {};

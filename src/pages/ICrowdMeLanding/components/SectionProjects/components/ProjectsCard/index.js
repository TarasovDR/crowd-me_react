import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

import { FontIcon } from '../../../../../../components/FontIcon';

import './styles.scss';

export const ProjectsCard = ({
  description,
  className,
  percent,
  image,
  title,
  price,
  label,
  fund,
  link,
}) => {
  const modify = classNames({});

  return (
    <div className={`projects-card ${className}${modify}`}>
      <div className="projects-card__inner">
        <div
          className="projects-card__image img-cover"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="projects-card__projectNew">
            <div className="projects-card__projectNew-label">{label}</div>
          </div>
          <div className="projects-card__price">
            <div className="projects-card__price-avia">{price}</div>
          </div>
        </div>

        <div className="projects-card__data">
          <div className="projects-card__data-title">{title}</div>
          <div className="projects-card__data-descr">{description}</div>
          <progress
            className="projects-card__data-progress"
            max="100"
            value={percent}
          ></progress>
          <div className="projects-card__data-fund">
            <div>{percent}% Funded</div>
            <div>{fund}</div>
          </div>
          <div className="projects-card__data-divider"></div>
          <div className="projects-card__data-details">
            <a className="projects-card__data-link" target="_blank" href={link}>
              See more details
              <FontIcon size="lg" iconColor="green" icon="play_arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectsCard.propTypes = {
  prop: types.string,
};

ProjectsCard.defaultProps = {};

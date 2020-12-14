import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg';

import { ContentContainer } from '../../../../components/ContentContainer';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubtitle } from '../../../../components/SectionSubtitle';
import worksIcon from '../../../../assets/icons/sectionWorksIcon.svg';

import './styles.scss';

export const SectionWorks = (props) => {
  const modify = classNames({
    ' works': props,
  });
  return (
    <>
      <div className="works" id="howItWorks">
        <ContentContainer maxWidth="1300">
          <div className="works__content">
            <ReactSVG src={worksIcon} className="works__icon" />
            <SectionTitle
              className="works__title"
              fluidWidth
              color="primary"
              title="Our work is the presentation 
              of our capabilities"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
              fontSize="works"
            />

            <SectionSubtitle
              className="works__subtitle"
              fluidWidth
              color="primary"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
              fontSize="works"
            />

            <SectionSubtitle
              className="works__subtitle"
              fluidWidth
              color="primary"
              subtitle="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
              fontSize="works"
            />
          </div>
        </ContentContainer>
      </div>
    </>
  );
};
SectionWorks.propTypes = {
  prop: types.string,
};

SectionWorks.defaultProps = {};

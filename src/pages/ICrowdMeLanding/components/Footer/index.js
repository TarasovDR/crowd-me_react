import types from 'prop-types';
import React from 'react';
import { ContentContainer } from '../../../../components/ContentContainer';
import { SectionSubtitle } from '../../../../components/SectionSubtitle';
import { SocialBlock } from './components/SocialBlock';
import { socialLinks } from './data';

import './styles.scss';

export const Footer = () => {
  return (
    <footer className="footer" id="blog">
      <ContentContainer>
        <div className="footer__content">
          <SocialBlock links={socialLinks} />

          <div className="footer__divider"></div>

          <SectionSubtitle
            className="footer__subtitle"
            fluidWidth
            color="secondary"
            subtitle="Copyright &copy; 2020 I Crowd Me"
            fontSize="footer"
          />
        </div>
      </ContentContainer>
    </footer>
  );
};

Footer.propTypes = {
  prop: types.string,
};

Footer.defaultProps = {};

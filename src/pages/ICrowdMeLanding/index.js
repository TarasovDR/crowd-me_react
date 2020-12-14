import React from 'react';

// Components

import { Header } from './components/Header';
import { SectionHero } from './components/SectionHero';
import { SectionWorks } from './components/SectionWorks';
// import {SectionSearch} from './components/SectionSearch';
import { SectionProjects } from './components/SectionProjects';
// import {SectionParts} from './components/SectionParts';
import { SectionMap } from './components/SectionMap';
import { Footer } from './components/Footer';
import { ButtonUp } from '../../components/ButtonUp';

// Styles

import './styles.scss';

// --------------------

export const ICrowdMeLanding = () => {
  return (
    <div className="landing">
      <Header />
      <SectionHero />
      <SectionWorks />
      {/* <SectionSearch /> */}
      <SectionProjects />
      {/* <SectionParts /> */}
      <SectionMap />
      <Footer />
      <div className="landing__button-up-wrapper">
        <ButtonUp />
      </div>
    </div>
  );
};

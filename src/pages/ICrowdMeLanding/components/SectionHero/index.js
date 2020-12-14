import types from 'prop-types';
import React, { useState } from 'react';

import { ContentContainer } from '../../../../components/ContentContainer';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubtitle } from '../../../../components/SectionSubtitle';
import { LoginButton } from '../../../../components/LoginButton';
import { LoginModal } from './components/LoginModal';

import './styles.scss';

export const SectionHero = (props) => {
  const [modalIsOpen, toggleModal] = useState(false);

  const toggleModalHandler = () => {
    toggleModal(!modalIsOpen);
  };

  return (
    <>
      <div className="hero" id="home">
        <ContentContainer maxWidth="1300">
          <div className="hero__content">
            <SectionTitle
              className="hero__title"
              fluidWidth
              color="white"
              title="Intellectual Property has the Shelf Life"
              fontSize="hero"
            />

            <SectionSubtitle
              className="hero__subtitle"
              fluidWidth
              color="white"
              subtitle="of a Banana"
              fontSize="hero"
            />

            <LoginButton
              onClick={() => toggleModalHandler()}
              className="hero__button"
              borderRadius
              bgColor="primaryGreen"
              color="white"
              maxWidth="254"
              minHeight="72"
              fontSize="1.2"
            >
              Become a Member
            </LoginButton>
          </div>
        </ContentContainer>
      </div>

      <LoginModal isOpen={modalIsOpen} onClose={toggleModalHandler} />
    </>
  );
};
SectionHero.propTypes = {
  prop: types.string,
};

SectionHero.defaultProps = {};

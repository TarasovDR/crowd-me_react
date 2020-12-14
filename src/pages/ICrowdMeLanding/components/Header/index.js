import classNames from 'classnames';
import types from 'prop-types';
import React, { useState } from 'react';

import { ContentContainer } from '../../../../components/ContentContainer';
import { Logo } from '../../../../components/Logo';
import { Navbar } from './components/Navbar';
import { LoginButton } from '../../../../components/LoginButton';
import { LoginModal } from '../../components/SectionHero/components/LoginModal';

import useCurrentPosition from '../../../../hooks/useCurrentPosition';

import { navigationLinks } from './data';

import logo from '../../../../assets/icons/iCrowdMe_logo.svg';

import './styles.scss';
import AsideDrawer from './components/AsideDrawer';
import HamburgerButton from './components/HamburgerButton';

export const Header = (props) => {
  const [isAsideOpen, toggleAside] = useState(false);

  const currentPosition = useCurrentPosition();

  const handleToggleAside = () => {
    toggleAside(!isAsideOpen);
  };

  const [modalIsOpen, toggleModal] = useState(false);

  const toggleModalHandler = () => {
    toggleModal(!modalIsOpen);
  };

  const modify = classNames({
    ' header--on-scroll': currentPosition >= 1,
  });

  return (
    <>
      <div className={`header${modify}`}>
        <ContentContainer>
          <div className="header__content">
            <Logo svg={logo} />

            <Navbar
              activeItem="Home"
              className="header__navbar"
              links={navigationLinks}
            />

            <LoginButton
              onClick={() => toggleModalHandler()}
              className="header__button"
              borderRadius
              bgColor="transparent"
              color="textPrimary"
              maxWidth="100"
              minHeight="38"
              fontSize="0.9"
              uppercase
            >
              Login
            </LoginButton>

            <div className="header__right-block">
              <HamburgerButton
                className="header__menu-btn-wrapper"
                isOpen={isAsideOpen}
                handleClick={handleToggleAside}
              />
            </div>

            <AsideDrawer
              className="header__aside"
              isOpen={isAsideOpen}
              handleClick={handleToggleAside}
              links={navigationLinks}
            />
          </div>
        </ContentContainer>
      </div>

      <LoginModal isOpen={modalIsOpen} onClose={toggleModalHandler} />
    </>
  );
};

Header.propTypes = {
  prop: types.string,
};

Header.defaultProps = {};

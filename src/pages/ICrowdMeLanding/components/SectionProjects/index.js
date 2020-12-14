import types from 'prop-types';
import React, { useState } from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { CustomSlider } from '../../../../components/CustomSlider';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubtitle } from '../../../../components/SectionSubtitle';
import { ProjectsCard } from './components/ProjectsCard';
import { LoginButton } from '../../../../components/LoginButton';
import { LoginModal } from '../SectionHero/components/LoginModal';

// Data

import { projects } from './data';

// Styles

import './styles.scss';

// ----------------

export const SectionProjects = (props) => {
  const [modalIsOpen, toggleModal] = useState(false);

  const toggleModalHandler = () => {
    toggleModal(!modalIsOpen);
  };

  // Render

  return (
    <>
      <div className="projects" id="discoverAProject">
        <ContentContainer maxWidth="1300">
          <div className="projects__content">
            <div className="projects__content-title">
              <div className="projects__content-title--block">
                <SectionTitle
                  className="projects__title"
                  fluidWidth
                  color="primary"
                  title="Featured Projects"
                  align="left"
                  fontSize="projects"
                />

                <SectionSubtitle
                  className="works__subtitle"
                  fluidWidth
                  color="primary"
                  subtitle="Brief details of new and popular projects. To view full listings, you will be required to sign up and become a member."
                  fontSize="projects"
                />
              </div>

              <LoginButton
                onClick={() => toggleModalHandler()}
                className="projects__button"
                borderRadius
                borderColor
                bgColor="transparent"
                color="textPrimary"
                maxWidth="181"
                minHeight="50"
                fontSize="0.928"
              >
                Become a Member
              </LoginButton>
            </div>

            {/* <div className="projects__cards-wrapper"> */}
            <CustomSlider className="projects__slider">
              {projects.map((item) => {
                return (
                  <ProjectsCard
                    className="projects__card"
                    image={item.image}
                    label={item.label}
                    price={item.price}
                    title={item.title}
                    description={item.description}
                    percent={item.percent}
                    fund={item.fund}
                    divider={item.divider}
                    link={item.link}
                    key={item.id}
                    id={item.id}
                  />
                );
              })}
            </CustomSlider>
            {/* </div> */}
          </div>
        </ContentContainer>
      </div>

      <LoginModal isOpen={modalIsOpen} onClose={toggleModalHandler} />
    </>
  );
};

// ----------------

// Type of props

SectionProjects.propTypes = {
  prop: types.string,
};

// Default value for props

SectionProjects.defaultProps = {};

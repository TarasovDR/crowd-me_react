import React, { Component } from 'react';
import Slider from 'react-slick';
import types from 'prop-types';
import { FontIcon } from '../FontIcon';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} projects-next-arrow`} onClick={onClick}>
      <FontIcon size="xxxxl" iconColor="grey" icon="navigate_next_rounded" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} projects-prev-arrow`} onClick={onClick}>
      <FontIcon size="xxxxl" iconColor="grey" icon="navigate_before_rounded" />
    </div>
  );
}

class CustomSlider extends Component {
  static propTypes = {
    prop: types.string,
  };

  static defaultProps = {};

  render() {
    const { children, className } = this.props;

    const defaultSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // centerMode: true,
      // centerPadding: '0',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 2,
            centerPadding: '40px',
            centerMode: true,
            // variableWidth: true,
          },
        },
        { breakpoint: 1024, settings: { slidesToShow: 1 } },
      ],
    };

    return (
      <Slider {...defaultSettings} className={`slider ${className}`}>
        {children}
      </Slider>
    );
  }
}

export { CustomSlider };

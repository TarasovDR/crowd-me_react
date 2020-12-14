import React, { Component } from 'react';
import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

class Name extends Component {
  // Type of props

  static propTypes = {
    prop: types.string,
  };

  // Default value for props

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // Modify

    const modify = classNames({
      ' name': this.props,
    });

    return <div className={`name${modify}`} />;
  }
}

export { Name };

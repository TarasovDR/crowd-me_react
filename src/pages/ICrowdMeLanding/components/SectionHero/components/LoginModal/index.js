import types from 'prop-types';
import React from 'react';

import { Modal } from '../../../../../../components/Modal';

// Styles

import './styles.scss';

// ----------------

export const LoginModal = ({ isOpen, onClose }) => {
  // Render

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Hello Beetroot guys!">
      <p>Hello</p>
    </Modal>
  );
};

// ----------------

// Type of props

LoginModal.propTypes = {
  prop: types.string,
};

// Default value for props

LoginModal.defaultProps = {};

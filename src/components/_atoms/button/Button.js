import React from 'react';
import PropTypes from 'prop-types';
import { Body } from './styles/index';

/**
 * Primary UI component for user interaction
 */
export default function Button({ modifier, label, ...restProps }) {
  return (
    <Body modifiers={[modifier]}{ ...restProps } >
      {label}
    </Body>
  );
};

Button.propTypes = {
  /**
   * How large should the button be?
   */
  modifier: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  modifier: 'medium',
  onClick: undefined,
};
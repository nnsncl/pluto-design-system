import React from 'react';
import PropTypes from 'prop-types';
import { Body } from './styles/Button';

/**
 * Buttons are used to initialize an action. Button labels express what action will
 * occur when the user interacts with it.
 */
export default function Button({ modifier, label, ariaLabel, ...restProps }) {
  return (
    <Body
      modifiers={[modifier]}
      type='button'
      aria-label={ariaLabel}
      { ...restProps }
    >
      <span>{label}</span>
    </Body>
  );
};

Button.propTypes = {
  /**
   * How large should the button be
   */
  modifier: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * aria-label have accessibility purpose, it must define the Component and its Action
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  modifier: 'medium',
  onClick: null,
};
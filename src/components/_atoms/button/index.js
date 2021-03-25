import React from 'react';
import PropTypes from 'prop-types';
import { Body } from './styles/Button';

/**
 * Buttons are used to initialize an action. Button labels express what action will
 * occur when the user interacts with it.
 *
 * **Best practices:** 
 *
 * - Define the hierarchy of buttons with different variants.
 * - Button label must be short and understandable.
 * - Provide an aria-label for buttons that don't contain text (e.g. icon buttons).
 */
export default function Button({
  modifiers,
  'aria-label': ariaLabel,
  as,
  disabled,
  onClick,
  children,
  ...restProps }) {

  function handleKeyDown(e) {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') onClick();
  }

  return (
    <Body
      role='button'
      tabIndex={0}
      modifiers={modifiers}
      as={as}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      onClick={!disabled ? onClick : null}
      aria-label={ariaLabel}
      aria-disabled={disabled ? 'true' : 'false'}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...restProps}
    >
      {children}
    </Body>
  );
};

Button.propTypes = {

  /**
   * Specify Button variant, you can set multipe modifers to a single component.
   * **Modifiers:**
   * `small`, `medium`, `large`, `dark`, `light`, `secondary`
   */
  modifiers: PropTypes.array.isRequired,

  /**
  * Specify whether the Button should render as a link
  */
  as: PropTypes.oneOf(['a', 'Link']),

  /**
    * Specify whether the button should be disabled.
  */
  disabled: PropTypes.bool,

  /**
   * Button content
   */
  children: PropTypes.node.isRequired,

  /**
   * Define aria-label if the button isn't a prent of a text element.
   */
  ariaLabel: PropTypes.string.isRequired,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

};

Button.defaultProps = {
  modifiers: ['medium', 'secondary'],
  onClick: null,
};
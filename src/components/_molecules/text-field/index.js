import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../../_atoms/typography/index';

import { Container, HiddenField, Wrapper, Indicator } from './styles/Field';

/**
 * Fields enable the user to customize the associated labels and helpers throught properties.
 * Use this component if you need to add an Icon or a button to it.
 */
export default function TextField({
    name,
    type,
    label,
    placeholder,
    value,
    defaultValue,
    helper,
    disabled,
    required,
    error,
    onClick,
    onChange,
    modifiers,
    children,
    restProps }) {

    return (
        <Container disabled={disabled} >
            <Typography.Label modifiers={['bold']} htmlFor={name}>
                {label}{required ? <Indicator>*</Indicator> : null}
            </Typography.Label>
            <Wrapper error={error} modifiers={modifiers} >
                <HiddenField
                    error={error}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    value={value}
                    disabled={disabled}
                    required={required}
                    onClick={onClick}
                    onChange={onChange}
                    autocomplete='on'
                    {...restProps}
                />
                {children}
            </Wrapper>
            { helper
                ? <Typography modifiers={['regular']} >{helper}</Typography>
                : null
            }
        </Container>
    );
};

TextField.propTypes = {

    /**
    * Specify Input variant, you can set multipe modifers to a single component.
    * **Modifiers:**
    * `light`, `dark`
    */
    modifiers: PropTypes.array.isRequired,
    
    /**
     * Specify the element displayed as a children
     */
    children: PropTypes.node,

    /**
     * Specify the label of the input.
     */
    label: PropTypes.string.isRequired,

    /**
     * Specify the name of the input.
     */
    name: PropTypes.string.isRequired,

    /**
    * Specify the placeholder of the input.
    */
    placeholder: PropTypes.string.isRequired,

    /**
    * Specify the value of the input.
    */
    value: PropTypes.string,

    /**
    * Optionally provide the default value of the input.
    */
    defaultValue: PropTypes.string,

    /**
    * Provide text that is used alongside the control label for additional help.
    */
    helper: PropTypes.string,

    /**
    * Specify whether the input should be disabled.
    */
    disabled: PropTypes.bool,

    /**
    * Specify whether the input should be required.
    */
    required: PropTypes.bool,

    /**
    * Specify the input type.
    */
    type: PropTypes.oneOf(['text', 'email', 'url', 'password']).isRequired,

    /**
    * Initialize the input error state.
    */
    error: PropTypes.bool,

    /**
     * Optionally provide an onClick handler that is called whenever the input is clicked.
     */
    onClick: PropTypes.func,

    /**
     * Optionally provide an onChange handler that is called whenever the input value changes.
     */
    onChange: PropTypes.func,

};

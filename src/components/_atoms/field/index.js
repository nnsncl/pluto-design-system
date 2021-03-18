import React from 'react';
import PropTypes from 'prop-types';

import { Container, HiddenField } from './styles/Field';

/**
 * Inputs enable the user to interact with and input content and data. This component can be used for long and short form entries.
 * Use this component if you need to add an Icon or a button to it.
 */
export default function Field({
    name,
    type,
    placeholder,
    value,
    defaultValue,
    disabled,
    error,
    onClick,
    children,
}) {
    return (
        <Container error={error} disabled={disabled}>
            <HiddenField
                name={name}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={value}
                disabled={disabled}
                onClick={onClick}
            />
            {children}
        </Container>
    );
};



Field.propTypes = {

    /**
     * Child will be used for its parent related actions.
     */
    children: PropTypes.node,

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
    * Specify whether the input should be disabled.
    */
    disabled: PropTypes.bool,

    /**
    * Specify the input type.
    */
    type: PropTypes.oneOf(['text', 'password']).isRequired,

    /**
    * Initialize the input error state.
    */
    error: PropTypes.bool,

    /**
     * Optionally provide an onClick handler that is called whenever the input is clicked.
     */
    onClick: PropTypes.func,

};

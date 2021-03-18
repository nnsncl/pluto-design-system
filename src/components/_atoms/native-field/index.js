import React from 'react';
import PropTypes from 'prop-types';

import { Field } from './styles/NativeField';

/**
 * Inputs enable the user to interact with and input content and data. This component can be used for long and short form entries.
 * Use this component if you need an input without an Icon, a Button or any kind of combination.
 */
export default function NativeField({
    name,
    type,
    placeholder,
    value,
    defaultValue,
    disabled,
    error,
    onClick }) {
    return (
        <Field
            error={error}
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            disabled={disabled}
            onClick={onClick}
        />
    );
};


NativeField.propTypes = {

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
    type: PropTypes.oneOf(['text', 'email', 'url', 'password']).isRequired,

    /**
    * Initialize the input error state.
    */
    error: PropTypes.bool,

    /**
     * Optionally provide an onClick handler that is called whenever the input is clicked.
     */
    onClick: PropTypes.func,

};

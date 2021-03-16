import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../../_atoms/typography/index';
import { Container, Label, Field } from './styles/Input';

/**
 * Inputs enable the user to interact with and input content and data. This component can be used for long and short form entries.
 */
export default function InputField({ name, label, placeholder, value, defaultValue, helper, disabled }) {
    return (
        <Container disabled={disabled} >
            <Label htmlFor={name} >{label}</Label>
            <Field
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={value}
                disabled={disabled} />
            { helper
                ? <Typography>{helper}</Typography>
                : null
            }
        </Container>
    );
};

InputField.propTypes = {

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
     * Optionally provide an onClick handler that is called whenever the input is clicked.
     */
    onClick: PropTypes.func,

};

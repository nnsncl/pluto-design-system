import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../../_atoms/typography/index';
import NativeField from '../../_atoms/native-field/index';

import { Container } from './styles/NativeControlledField';

/**
 * Controlled Inputs enable the user to customize the associated labels and helpers throught properties.
 * Use this component if you need an input without an Icon, a Button or any kind of combination.
 */
export default function NativeControlledField({
    name,
    type,
    label,
    placeholder,
    value,
    defaultValue,
    helper,
    disabled,
    error }) {
    return (
        <Container error={error} disabled={disabled} >
            <Typography.Label modifier='bold' htmlFor={name} >{label}</Typography.Label>
            <NativeField
                error={error}
                name={name}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={value}
                disabled={disabled}
            />
            { helper
                ? <Typography>{helper}</Typography>
                : null
            }
        </Container>
    );
};

NativeControlledField.propTypes = {

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
    * Specify the input type.
    */
    type: PropTypes.oneOf(['text', 'email', 'url']).isRequired,

    /**
    * Initialize the input error state.
    */
    error: PropTypes.bool,

    /**
     * Optionally provide an onClick handler that is called whenever the input is clicked.
     */
    onClick: PropTypes.func,

};

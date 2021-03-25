import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '../text-field'
import { ActionWrapper, Icon, Visibility } from './styles/PasswordField';

/**
 * Fields enable the user to customize the associated labels and helpers throught properties.
 * Password inputs enable the user to hide the input displayed content.
 */
export default function PasswordField({
    name,
    label,
    placeholder,
    value,
    defaultValue,
    helper,
    disabled,
    required,
    onClick,
    modifiers,
    error }) {

    const [isVisible, setIsVisible] = useState(false);

    const handleToggleVisibility = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible);
    };

    return (
        <TextField
            disabled={disabled}
            required={required}
            defaultValue={defaultValue}
            helper={helper}
            label={label}
            name={name}
            onClick={onClick}
            placeholder={placeholder}
            error={error}
            value={value}
            type={isVisible ? 'text' : 'password'}
            modifiers={modifiers}
        >
            <ActionWrapper onClick={handleToggleVisibility} >
                <Icon viewBox='0 0 48 48' >
                    <Visibility>
                        <path id="eye" d="M6 24s4.9091-12 18-12c9.8182 0 18 12 18 12s-8.1818 12-18 12C10.9091 36 6 24 6 24z" />
                        <path id="pupil" fillRule="evenodd" d="M24 30c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6z" clipRule="evenodd" />
                        {isVisible
                            ? <path id="stroke" d=" M7.58579 35.8701L35.87006 7.58583l4.24264 4.24264-28.28427 28.28427z" />
                            : null
                        }
                    </Visibility>
                </Icon>
            </ActionWrapper>
        </TextField>
    );
};

PasswordField.propTypes = {

    /**
    * Specify Input variant, you can set multipe modifers to a single component.
    * **Modifiers:**
    * `light`, `dark`
    */
    modifiers: PropTypes.array.isRequired,

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
    * Initialize the input error state.
    */
    error: PropTypes.bool,

    /**
     * Optionally provide an onClick handler that is called whenever the input is clicked.
     */
    onClick: PropTypes.func,

};

PasswordField.defaultProps = {
    type: 'password'
};

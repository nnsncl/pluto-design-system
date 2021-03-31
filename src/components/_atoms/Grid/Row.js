import React from 'react';
import PropTypes from 'prop-types';
import { Frame } from './styles/Grid';

export default function Row({ responsiveDirection, children }) {
    return (
        <Frame responsiveDirection={responsiveDirection} >
            {children}
        </Frame>
    );
};

Row.propTypes = {
    /**
    * Rows content
    */
    children: PropTypes.node.isRequired,

    /**
    * Specify when `flex-direction` should switch to `column`.
    */
     responsiveDirection: PropTypes.oneOf(['small', 'medium', 'large']),
};

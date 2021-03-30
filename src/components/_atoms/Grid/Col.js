import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles/Grid';


export default function Col({ children, size, collapse, responsiveSize }) {
    return (
        <Container size={size} collapse={collapse} responsiveSize={responsiveSize} >
            {children}
        </Container>
    );
};

Col.propTypes = {
    /**
    * Columns content
    */
    children: PropTypes.node.isRequired,
    
    /**
    * Columns Flex ratio
    */
     size: PropTypes.string.isRequired,

    /**
    * Specify when the column must not be displayed
    */
     collapse: PropTypes.oneOf(['small', 'medium', 'large']),

    /**
    * Specify the media breakpoint and the Flex ratio of the column
    */
     responsiveSize: PropTypes.array,
}
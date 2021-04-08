import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Frame, Container } from './styles/Grid';

export default function Grid({ lockWidthAt, children }) {
    return(
        <Wrapper lockWidthAt={lockWidthAt} >
            {children}
        </Wrapper>
    );
};

Grid.Row = function Row({ responsiveDirection, children }) {
    return (
        <Frame responsiveDirection={responsiveDirection} >
            {children}
        </Frame>
    );
};

Grid.Col = function Col({ children, size, collapse, responsiveSize }) {
    return (
        <Container size={size} collapse={collapse} responsiveSize={responsiveSize} >
            {children}
        </Container>
    );
};

Grid.propTypes = {
    /**
    * Grids content
    */
    children: PropTypes.node.isRequired,

    /**
    * Specify wether the Grid have a `max-width`. **The value provided will define the `max-width` value on pixels**.
    */
    lockWidthAt: PropTypes.string,

    /**
    * Specify when Rows `flex-direction` should switch to `column`.
    */
    responsiveDirection: PropTypes.oneOf(['small', 'medium', 'large']),

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
};
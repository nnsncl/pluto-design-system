import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/Grid';

export default function Grid({ lockWidthAt, children }) {
    return(
        <Wrapper lockWidthAt={lockWidthAt} >
            {children}
        </Wrapper>
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
};

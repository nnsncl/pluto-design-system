import React from 'react'
import PropTypes from 'prop-types';

import {
    Small,
    Label,
    Body,
    Large,
    Title100,
    Title200,
    Title300,
    Title400,
    Title500,
    Title600
} from './styles/Typography';

/**
 * Typography can help create clear hierarchies, organize information, and guide users   * through a product or experience.
 */

export default function Typography({ children, modifiers }) {
    return <Body modifiers={modifiers} >{children}</Body>
}

Typography.Label = function TypographyLabel({ htmlFor, children, modifiers }) {
    return <Label htmlFor={htmlFor} modifiers={modifiers} >{children}</Label>
}

Typography.Small = function TypographySmall({ children, modifiers }) {
    return <Small modifiers={modifiers} >{children}</Small>
}

Typography.Large = function TypographyLarge({ children, modifiers }) {
    return <Large modifiers={modifiers} >{children}</Large>
}

Typography.Title100 = function TypographyTittle100({ children, modifiers }) {
    return <Title100 modifiers={modifiers} >{children}</Title100>
}

Typography.Title200 = function TypographyTittle200({ children, modifiers }) {
    return <Title200 modifiers={modifiers} >{children}</Title200>
}

Typography.Title300 = function TypographyTittle300({ children, modifiers }) {
    return <Title300 modifiers={modifiers} >{children}</Title300>
}

Typography.Title400 = function TypographyTittle400({ children, modifiers }) {
    return <Title400 modifiers={modifiers} >{children}</Title400>
}

Typography.Title500 = function TypographyTittle500({ children, modifiers }) {
    return <Title500 modifiers={modifiers} >{children}</Title500>
}

Typography.Title600 = function TypographyTittle600({ children, modifiers }) {
    return <Title600 modifiers={modifiers} >{children}</Title600>
}

Typography.propTypes = {

    /**
    * Specify Font Weight and color controls. You can set multipe modifers to a single component.
    * **Modifiers:**
    * `thin`, `regular`, `semiBold`, `bold`, `extraBold`, `light`, `black`
    */
    modifiers: PropTypes.array.isRequired,

    /**
     * Component's content.
     */
    children: PropTypes.node.isRequired

}

Typography.Label.propTypes = {
    htmlFor: PropTypes.string.isRequired
}

Typography.defaultProps = {
    modifiers: 'regular'
};

Typography.Label.argumentsdefaultProps = {
    modifiers: 'bold'
};

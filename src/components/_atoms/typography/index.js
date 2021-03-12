import React from 'react'
import PropTypes from 'prop-types';

import {
    Small,
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

export default function Typography({ children, modifier }){
    return <Body modifiers={[modifier]} >{children}</Body>
}

Typography.Small = function TypographySmall({children, modifier}){
    return <Small modifiers={[modifier]} >{children}</Small>
}

Typography.Large = function TypographyLarge({children, modifier}){
    return <Large modifiers={[modifier]} >{children}</Large>
}

Typography.Title100 = function TypographyTittle100({children, modifier}){
    return <Title100 modifiers={[modifier]} >{children}</Title100>
}

Typography.Title200 = function TypographyTittle200({children, modifier}){
    return <Title200 modifiers={[modifier]} >{children}</Title200>
}

Typography.Title300 = function TypographyTittle300({children, modifier}){
    return <Title300 modifiers={[modifier]} >{children}</Title300>
}

Typography.Title400 = function TypographyTittle400({children, modifier}){
    return <Title400 modifiers={[modifier]} >{children}</Title400>
}

Typography.Title500 = function TypographyTittle500({children, modifier}){
    return <Title500 modifiers={[modifier]} >{children}</Title500>
}

Typography.Title600 = function TypographyTittle600({children, modifier}){
    return <Title600 modifiers={[modifier]} >{children}</Title600>
}

Typography.propTypes = {
    
    /**
     * Font Weight and color controls
     */
    modifier: PropTypes.oneOf([
        'thin',
        'regular',
        'semiBold',
        'bold',
        'extraBold',
        'light',
        'dark'
    ]).isRequired,

    /**
     * Component's content
     */
    children: PropTypes.node.isRequired

}
  
Typography.defaultProps = {
    modifier: 'regular'
  };

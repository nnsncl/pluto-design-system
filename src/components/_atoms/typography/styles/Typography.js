import styled from 'styled-components';
import { typeScale, primaryFont, secondaryFont } from '../../../../utils/typography';
import { neutral } from '../../../../utils/colors';
import { applyStyleModifiers } from 'styled-components-modifiers';

const TYPOGRAPHY_MODIFIERS = {
    thin: () => `font-weight: 300`,
    regular: () => `font-weight: 400`,
    semiBold: () => `font-weight: 500`,
    bold: () => `font-weight: 700`,
    extraBold: () => `font-weight: 900`,
    light: () => `color: ${neutral[50]}`,
    dark: () => `color: ${neutral[100]}`,
};


export const Small = styled.p`
    font-size: ${typeScale[20]};
    font-family: ${secondaryFont};
    line-height: 1em;

    ${applyStyleModifiers(TYPOGRAPHY_MODIFIERS)};
`;

export const Body = styled.p`
    font-size: ${typeScale[30]};
    font-family: ${secondaryFont};
    line-height: 1em;

    ${applyStyleModifiers(TYPOGRAPHY_MODIFIERS)};
`;

export const Large = styled.p`
    font-size: ${typeScale[40]};
    font-family: ${secondaryFont};
    line-height: 1em;

    ${applyStyleModifiers(TYPOGRAPHY_MODIFIERS)};
`;

export const Title100 = styled.h1`
    font-size: ${typeScale[100]};
    font-family: ${primaryFont};
    line-height: 1em;
    letter-spacing: -1.8px;

    ${applyStyleModifiers(TYPOGRAPHY_MODIFIERS)};
`;

export const Title200 = styled.h2`
    font-size: ${typeScale[90]};
    font-family: ${primaryFont};
    line-height: 1em;
    letter-spacing: -1.6px;

    ${applyStyleModifiers(TYPOGRAPHY_MODIFIERS)};
`;

export const Title300 = styled.h3`
    font-size: ${typeScale[80]};
    font-family: ${primaryFont};
    line-height: 1em;
    letter-spacing: -1.4px;

    ${applyStyleModifiers(TYPOGRAPHY_MODIFIERS)};
`;

export const Title400 = styled.h4`
    font-size: ${typeScale[70]};
    font-family: ${primaryFont};
    line-height: 1em;
    letter-spacing: -1.4px;

    ${applyStyleModifiers(TYPOGRAPHY_MODIFIERS)};
`;

export const Title500 = styled.h5`
    font-size: ${typeScale[60]};
    font-family: ${primaryFont};
    line-height: 1em;
    letter-spacing: -1.2px;

    ${applyStyleModifiers(TYPOGRAPHY_MODIFIERS)};
`;

export const Title600 = styled.h6`
    font-size: ${typeScale[50]};
    font-family: ${primaryFont};
    line-height: 1em;
    letter-spacing: -1.2px;

    ${applyStyleModifiers(TYPOGRAPHY_MODIFIERS)};
`;
import styled from 'styled-components';
import { secondaryFont, typeScale, neutral } from '../../../../utils';
import { applyStyleModifiers } from 'styled-components-modifiers'

const BUTTON_MODIFIERS = {

    small: () => `
        padding: 1.3rem 1.9rem;
        border-radius: .4rem;
    `,

    medium: () => `
        padding: 1.9rem 2.3rem;
        border-radius: .9rem;
    `,

    large: () => `
        padding: 1.9rem 3.6rem;
        border-radius: .9rem;
    `,
}

export const Body = styled.button`
    font-family: ${secondaryFont};
    font-size: ${typeScale[10]};
    font-weight: 400;
    line-height: 0;
    letter-spacing: -0.01em;
    text-decoration: none;
    border: none;
    color: ${neutral[100]};
    background: ${neutral[70]};
    transition: all ease-out .2s;
    outline: none;
    cursor: pointer;
    :disabled {
        mix-blend-mode: difference;
        background-color: ${neutral[80]};
        border: none;
        cursor: not-allowed;
        opacity: 0.3;
    }
    :hover {
        color: ${neutral[60]};
        background: ${neutral[100]};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
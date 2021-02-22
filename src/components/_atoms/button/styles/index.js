import styled from 'styled-components';
import { secondaryFont, typeScale, neutral } from '../../../../utils';
import { applyStyleModifiers } from 'styled-components-modifiers'

const BUTTON_MODIFIERS = {

    small: () => `
        font-size: ${typeScale[10]};
        padding: 1.3rem 1.9rem;
        border-radius: .4rem;
    `,

    medium: () => `
        font-size: ${typeScale[20]};
        padding: 1.9rem 2.3rem;
        border-radius: .9rem;
    `,

    large: () => `
        font-size: ${typeScale[20]};
        padding: 1.9rem 3.6rem;
        border-radius: .9rem;
    `,
}

export const Body = styled.button`
    font-family: ${secondaryFont};
    font-weight: 400;
    line-height: 0;
    letter-spacing: -0.03em;
    text-decoration: none;

    border: none;

    color: ${neutral[60]};
    background: ${neutral[100]};

    transition: all ease-out .2s;
    outline: none;
    cursor: pointer;

    :disabled {
        background-color: ${neutral[80]};
        border: none;
        cursor: not-allowed;
        opacity: 0.3;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
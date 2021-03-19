import styled from 'styled-components';
import { typeScale, neutral } from '../../../../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { lighten } from 'polished';

const BUTTON_MODIFIERS = {

    small: () => `
        padding: 2.3rem;
    `,

    medium: () => `
        padding: 2.9rem 3.6rem;
    `,

    large: () => `
        padding: 2.9rem 5.2rem;
    `,
}

export const Body = styled.button`
    font-size: ${typeScale[40]};
    font-weight: bold;
    line-height: 0;
    text-decoration: none;
    border: none;
    border-radius: 1.3rem;
    color: ${neutral[70]};
    background: ${neutral[100]};
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
        color: ${neutral[50]};
        background: ${lighten('0.13', `${neutral[100]}`)};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
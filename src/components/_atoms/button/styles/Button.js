import styled from 'styled-components';
import { typeScale, neutral } from '../../../../utils';

import { applyStyleModifiers } from 'styled-components-modifiers';
import { motion } from "framer-motion";

const BUTTON_MODIFIERS = {

    small: () => `
        padding: 2.3rem;
    `,

    medium: () => `
        padding: 2.9rem 3.6rem;
    `,

    large: () => `
        padding: 2.9rem 5.6rem;
    `,

    dark: () => `
        color: ${neutral[80]};
        background: ${neutral[100]};
        :hover {
            color: ${neutral[50]};
        }
    `,

    light: () => `
        color: ${neutral[100]};
        background: ${neutral[50]};
        :hover {
            color: ${neutral[100]};
        }
    `,

    secondary: () => `
        color: ${neutral[100]};
        background: ${neutral[70]};
    `,

}

export const Body = styled(motion.button)`
    font-size: ${typeScale[30]};
    font-weight: 400;
    line-height: 0;
    text-decoration: none;
    border: none;
    border-radius: 1.3rem;
    outline: none;
    cursor: pointer;
    transition: all ease-out .2s;
    
    :disabled {
        opacity: 0.3;
        border: none;
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
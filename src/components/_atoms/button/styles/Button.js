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
}

export const Body = styled(motion.button)`
    font-size: ${typeScale[30]};
    font-weight: 400;
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
        opacity: 0.3;
        border: none;
        cursor: not-allowed;
    }

    :hover {
        color: ${neutral[50]};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
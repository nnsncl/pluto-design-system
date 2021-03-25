import styled from 'styled-components';
import { typeScale, neutral, primary } from '../../../../utils';

import { applyStyleModifiers } from 'styled-components-modifiers';

const INPUT_MODIFIERS = {
    light: () => `
        background: ${neutral[50]};
    `,
    dark: () => `
        background: ${neutral[70]};
    `
}

export const Container = styled.fieldset`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    background: none;
    border: none;

    p {
        margin: 0;

        :last-of-type{
            align-self: flex-end;
        }
    }

    ${(props) => props.disabled === true
        && (`opacity: 0.3;`)
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 1.9rem;
    border-radius: 1.6rem;
    margin: 0.9rem 0;
    transition: all ease-out .2s;
    width: 100%;

    ${(props) => props.error === true
        ? (`border: 2px solid ${primary.red[100]};`)
        : (`border: 2px solid transparent};`)
    }

    :hover {
        ${(props) => props.error === true 
            ? (`border: 2px solid ${primary.red[100]};`)
            : (`border: 2px solid ${neutral[80]};`)
        }
    }
    
    :disabled {
        opacity: 0.3;
    }

    ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

export const HiddenField = styled.input`
    font-size: ${typeScale[30]};
    padding: 1.3em 0;
    width: 100%;
    height: 100%;
    border: 0;
    background: none;
    outline: none;

    :disabled{
        cursor: not-allowed;
    }
`;

export const Indicator = styled.span`
    color: ${primary.red[100]};
    margin-left: 0.3rem
`;
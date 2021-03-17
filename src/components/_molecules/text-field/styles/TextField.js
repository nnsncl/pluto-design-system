import styled from 'styled-components';
import { typeScale, neutral, primary } from '../../../../utils';

import { lighten } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
        margin: 0;
        line-height: 1em;
        ${(props) => props.error === true && (`color: ${primary.red[100]};`)}
    }

    ${(props) => props.disabled === true && (`opacity: 0.3;`)}
`;

export const Label = styled.label`
    font-size: ${typeScale[30]};
    font-weight: bold;
    margin-bottom: 1.3rem;
`;

export const Field = styled.input`
    font-size: ${typeScale[30]};
    padding: 1.3em 1.9rem;
    ${(props) => props.error === true
        ? (`border: 2px solid ${primary.red[100]};`)
        : (`border: 2px solid ${neutral[80]};`)
    }
    
    border-radius: 1.6rem;
    margin-bottom: 0.9rem;
    background: ${neutral[50]};
    outline: none;
    transition: all ease-out .2s;

    :disabled{
        cursor: not-allowed;
    }

    :hover {
        ${(props) => props.error === true 
            ? (` border: 2px solid ${primary.red[100]};
                 box-shadow: 0px 0px 1px 3px ${lighten('0.3', primary.red[100])};`)
            : (` border: 2px solid ${neutral[90]};
                 box-shadow: 0px 0px 1px 3px ${lighten('0.8', neutral[100])};`)
        }
    }

    :focus {
        ${(props) => props.error === true
        ? (`border: 2px solid ${primary.red[100]};`)
        : (`border: 2px solid ${neutral[90]};`)
    }
    }
`;
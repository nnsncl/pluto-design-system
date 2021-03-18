import styled from 'styled-components';
import { typeScale, neutral, primary } from '../../../../utils';

import { lighten } from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.9rem;
    border-radius: 1.6rem;
    margin-bottom: 0.9rem;
    background: ${neutral[50]};
    transition: all ease-out .2s;
    width: 100%;

    ${(props) => props.error === true
        ? (`border: 2px solid ${primary.red[100]};`)
        : (`border: 2px solid ${neutral[80]};`)
    }

    ${(props) => props.disabled === true
        && (`opacity: 0.3;`)
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
import styled from 'styled-components';
import { typeScale, neutral } from '../../../../utils';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
        margin: 0;
        line-height: 1em;
    }

    ${(props) => props.disabled === true && (`opacity: 0.3;`)}
`;

export const Label = styled.label`
    font-size: ${typeScale[30]};
    font-weight: bold;
    margin-bottom: 0.9rem;
`;

export const Field = styled.input`
    font-size: ${typeScale[30]};
    padding: 1.3rem 1.9rem;
    border: .05rem solid transparent;
    border-radius: 1.3rem;
    margin-bottom: 1.3rem;
    background: ${neutral[80]};
    outline: none;
    transition: all ease-out .2s;

    :disabled{
        cursor: not-allowed;
    }

    :hover {
        background: ${neutral[50]};
        border: .05rem solid ${neutral[80]};;
    }
`;
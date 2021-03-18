import styled from 'styled-components';
import { primary } from '../../../../utils';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
        margin: 0;
        line-height: 1em;
        ${(props) => props.error === true && (`color: ${primary.red[100]};`)}
    }

    label {
        margin-bottom: 1.3rem;
    }

`;
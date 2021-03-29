import styled from 'styled-components';
import { neutral } from '../../../../utils';

export const ActionWrapper = styled.button`
    border: none;
    background: none;
    padding: 1rem;
    outline: none;
    
    :hover {
        cursor: pointer;
    }
`;

export const Icon = styled.svg`
    fill: none;
    width: 2.4rem;
    height: 2.4rem;
`;

export const Visibility = styled.g`

    path {
        transition: all ease-out .2s;
    }

    #eye {
        fill: ${neutral[100]};
        opacity: 0.3;
    }
    #pupil {
        fill: ${neutral[100]};
    }
    #stroke {
        fill: ${neutral[100]};
        stroke: ${neutral[50]};
        stroke-width: 3;
        stroke-linejoin: round;
    }

    :hover {

        #eye {
            opacity: 1;
        }
        #pupil {
            fill: ${neutral[50]};
            opacity: 0.7;
        }

    }

`;
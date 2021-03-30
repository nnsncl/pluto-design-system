import styled from 'styled-components';

const breakpoints = {
    small: (styles) => `
        @media only screen and (max-width: 674px){
            ${styles}
        }
    `,
    medium: (styles) => `
        @media only screen and (max-width: 1024px) {
            ${styles}
        }
    `,
    large: (styles) => `
        @media only screen and (max-width: 1240px) {
            ${styles}
        }
    `
};

export const Wrapper = styled.section`
    margin: 0 auto;
    ${(props) => props.lockWidthAt
        ? (`max-width: ${props.lockWidthAt}px;`)
        : null
    }
`;

export const Frame = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${(props) => props.responsiveDirection &&
        breakpoints[props.responsiveDirection](`
            flex-direction: column;
    `)}
`;

export const Container = styled.div`
    flex: ${(props) => props.size};

    ${(props) => props.collapse &&
        breakpoints[props.collapse](`
            display: none;
    `)}
    ${(props) => props.responsiveSize &&
        breakpoints[props.responsiveSize[0]](`
         flex: ${(props) => props.responsiveSize[1]};
    `)}
`;
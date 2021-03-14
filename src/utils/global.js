import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { neutral } from './colors';
import { primaryFont, secondaryFont } from './typography';

export const GlobalStyle = createGlobalStyle`

    ${normalize()}
    
    *, *:before, *:after {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        background: ${neutral[70]};
        color: ${neutral[100]};
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: ${secondaryFont};
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${primaryFont};
        margin: 0;
        padding: 0;
    }

    main {
        margin: 0 auto;
    }
`;
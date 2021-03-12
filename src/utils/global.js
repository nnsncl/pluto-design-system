import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { neutral } from './colors';

export const GlobalStyle = createGlobalStyle`

    ${normalize()}
    
    *, *:before, *:after {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        background: ${neutral[100]};
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    main {
        margin: 0 auto;
    }
`;
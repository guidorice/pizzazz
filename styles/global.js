/* eslint-disable no-unused-expressions */

import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import * as colors from './colors';
import * as fonts from './fonts';

injectGlobal`
    ${normalize()}

    * {
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        margin: 0;
        padding: 0;
        color: ${colors.black};
        height: 100vh;
        width: 100vw;
        max-height: 100vh;
        max-width: 100vw;
        min-height: 100vh;
        min-width: 100vw;
    }
`;

/* eslint-enable no-unused-expressions */

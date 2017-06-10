import { css } from 'styled-components';
import * as colors from './colors';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700';
export const fontFam = 'Source Sans Pro, sans-serif';

export const weights = {
    'x-light'   : '200',
    'light'     : '300',
    'normal'    : '400',
    'bold'      : '600',
    'x-bold'    : '700',
};

export const sizes = {
    'xx-small'  : '10px',
    'x-small'   : '12px',
    'small'     : '14px',
    'medium'    : '16px',
    'large'     : '20px',
    'x-large'   : '26px',
    'xx-large'  : '34px',
};

export const lineHeights = {
    'xx-small'  : '12px',
    'x-small'   : '15px',
    'small'     : '18px', // TODO: should this be 25px, as in the design doc?
    'medium'    : '20px',
    'large'     : '25px',
    'x-large'   : '30px',
    'xx-large'  : '40px',
};

export const fontBase = css`
    font-family: ${fontFam};
    -webkit-font-smoothing: subpixel-antialiased;
`;

/*
@define-mixin ellipsis {
    word-break: break-word;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @mixin-content;
}
 */

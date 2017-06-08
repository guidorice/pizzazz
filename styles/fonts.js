import { css } from 'styled-components';
import * as colors from './colors';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700';
export const fontFam = 'Source Sans Pro, sans-serif';

export const weights = {
    x_light : '200',
    light   : '300',
    normal  : '400',
    bold    : '600',
    x_bold  : '700',
};

export const sizes = {
    xx_small    : '10px',
    x_small     : '12px',
    small       : '14px',
    medium      : '16px',
    large       : '20px',
    x_large     : '26px',
    xx_large    : '34px',
};

export const lineHeights = {
    xx_small    : '12px',
    x_small     : '15px',
    small       : '18px', // TODO: should this be 25px, as in the design doc?
    medium      : '20px',
    large       : '25px',
    x_large     : '30px',
    xx_large    : '40px',
};

export const fontBase = css`
    font-family: ${fontFam};
    font-weight: ${weights.normal};
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

/* eslint-disable */

import { css } from 'styled-components';
import * as colors from './colors';

export const primaryFontUrl     = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700';
export const secondaryFontUrl   = 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,600';
export const primaryFontFam     = 'Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
export const secondaryFontFam   = 'Source Code Pro, Courier, mono';

export const weights = {
  'x-light'   : 200,
  'light'     : 300,
  'normal'    : 400,
  'semibold'  : 600,
  'bold'      : 700,
};

export const sizes = {
  'x-small'   : '0.75rem',
  'small'     : '0.875rem',
  'medium'    : '1rem',
  'large'     : '1.25rem',
  'x-large'   : '1.625rem',
  'xx-large'  : '2rem',
  'xxx-large' : '2.875rem',
};

export const codeSizes = {
  'x-small'   : '0.6875rem',
  'small'     : '0.8125rem',
  'medium'    : '0.875rem',
}

export const defaultLineHeight = '1.5rem';
export const defaultParagraphHeight = '2.25rem';

export const lineHeights = {
  // TODO: what fraction of the size should these be? is it constant?
  'x-small'   : '15px',
  'small'     : '18px',
  'medium'    : '20px',
  'large'     : '25px',
  'x-large'   : '30px',
  'xx-large'  : '40px',
  'xxx-large' : '56px',   // TODO: is this correct?
};

// TODO: update this with appropriate code line heights
export const codeLineHeights = lineHeights;

export const fontBase = css`
  font-family: ${primaryFontFam};
  -webkit-font-smoothing: subpixel-antialiased;
`;

export const codeFontBase = css`
  font-family: ${secondaryFontFam};
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

/* eslint-enable */

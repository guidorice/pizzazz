// import * as colors from './colors'; // unused import

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
};

export const defaultLineHeight = '1.5rem';
export const defaultParagraphHeight = '2.25rem';

export const lineHeights = {
  // TODO: what fraction of the size should these be? is it constant?
  'x-small'   : 1.5,
  'small'     : 1.5,
  'medium'    : 1.5,
  'large'     : 1.5,
  'x-large'   : 1.5,
  'xx-large'  : 1.5,
  'xxx-large' : 1.5,   // TODO: is this correct?
};

// TODO: update this with appropriate code line heights
export const codeLineHeights = lineHeights;

export const fontBase = _ => ({
  fontFamily: primaryFontFam,
  fontSmoothing: 'subpixel-antialiased',
});

export const codeFontBase = _ => ({
    fontFamily: secondaryFontFam,
    fontSmoothing: 'subpixel-antialiased',
});

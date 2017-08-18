/* eslint-disable */

import { css } from 'styled-components';
import * as fonts from './fonts';

/******************* TEXT *******************/
export const text = (opts = {}) => {
  const { size = 'medium', weight = 'normal', code = false } = opts;
  const fontBase    = code ? fonts.codeFontBase           : fonts.fontBase;
  const fontSize    = code ? fonts.codeSizes[size]        : fonts.sizes[size];
  const lineHeight  = code ? fonts.codeLineHeights[size]  : fonts.lineHeights[size];
  const fontWeight  = fonts.weights[weight];

  return css`
    ${fontBase}
    font-size: ${fontSize};
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
  `;
};

export const text_box = (opts = {}) => {
  const { height = '1rem', lineHeight = '1rem' } = opts;

  return css`
    height: ${height};
    line-height: ${lineHeight};
    text-align: center;
  `;
}

/******************* FLEXBOX *******************/
export const flex = (opts = {}) => {
  const { display = 'flex', direction = 'row', justify = 'center', align = 'center' } = opts;
  return css`
    display: ${display};
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `;
};

export const flex_row = (opts = {}) => {
  const { justify = 'center', align = 'center' } = opts;
  return css`
    ${flex({ direction: 'row', justify, align })}
  `;
};

export const flex_col = (opts = {}) => {
  const { justify = 'center', align = 'center' } = opts;
  return css`
    ${flex({ direction: 'column', justify, align })}
  `;
};

/******************* POSITIONING *******************/
export const self_center = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const self_center_horiz = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

/******************* LISTS *******************/
export const scrollable = (direction = 'x') => css`
  overflow-${direction}: auto;
  -webkit-overflow-scrolling: touch;
`;

/******************* CONTAINERS *******************/
export const lego_container = (size = '.25rem') => css`
  padding: ${size};
`;

export const lego_block = (size = '.25rem') => css`
  margin: 0 ${size};
  padding: ${size} 0;
`;

/******************* BUTTONS AND ICONS *******************/
export const icon_base = (opts = {}) => {
  const { size = '20px', width = '30px' } = opts;
  return css`
    height: 100%;
    width: ${width};
    box-sizing: border-box;
    position: relative;
    background-size: ${size};
    background-repeat: no-repeat;
    background-position: center;
  `;
};

export const button = css`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const rounded_button = ({
  height = throwIfMissing('height'), width = throwIfMissing('width'),
}) => css`
  ${button}
  height: ${height};
  width: ${width};
  border-radius: ${height / 2};
`;

// creates a button with an icon
export const iconed_button = (opts = {}) => {
  const { size = '20px', width = '30px' } = opts;
  return css`
    ${button}
    ${icon_base({ size, width })}
  `;
};

// creates a button with text
export const text_button = (opts = {}) => {
  const { heigth = '30px', width = '30px' } = opts;
  return css`
    ${button}
    height: ${height};
    width: ${width};
    padding: 0;
  `;
};

/**
 * creates a checkbox icon, generally in a span in a label next to an input checkbox or radio tag
    <input checkbox />
    <label>
        <span checkbox />
        <span text />
    </label>
 */
export const checkbox = (opts = {}) => {
  const { size = '20px', height = '30px', width = '30px' } = opts;
  return css`
    ${icon_base({ size, width })}
    height: ${height};
    vertical-align: middle;
  `;
};

/******************** PARTIAL BORDERS ********************/
/**
 * partial borders mixins
 *
 * Instructions:
 * - apply to any selector to give it a partial-length border
     - specify your border's settings
     - optionally specify $marginLength
         - by default, 5px will remain on both sides of the partial border
 *
 * - example usage:
 *    partial-border({ side: 'left', border: '1px solid black', length: '7px' });
 *
 * Note: the parent element of the pseudo selector may require `position: relative`
 */
export const partial_border = ({
  side = throwIfMissing('side'), border = throwIfMissing('border'), length = '5px',
}) => {
  const isVertical = side === 'right' || side === 'left';
  const size = `calc(100% - (${length} * 2));`;
  return css`
    &::after {
      content: "";
      position: absolute;
      ${isVertical ? 'height' : 'width'}: ${size};
      ${isVertical ? 'top' : 'left'}: ${length};
      ${side}: -1px;
      border-${side}: ${border};
    }
  `;
};

function throwIfMissing(name) {
  throw new Error(`missing style param: ${name}`)
}

/* eslint-enable */

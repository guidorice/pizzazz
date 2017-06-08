/* eslint-disable */

import { css } from 'styled-components';
import * as fonts from './fonts';

/******************* TEXT *******************/
export const text = (size = 'normal') => {
  const fontSize = fonts.sizes[size];
  const lineHeight = fonts.lineHeights[size];
  return css`
    ${fonts.fontBase}
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};

/******************* FLEXBOX *******************/
export const flex = ({ direction = 'row', justify = 'center', align = 'center' }) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const flex_row = ({ justify = 'center', align = 'center' }) => css`
  ${flex({ direction: 'row', justify, center })}
`;

export const flex_col = ({ justify = 'center', align = 'center' }) => css`
  ${flex({ direction: 'column', justify, center })}
`;

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
export const icon_base = ({ size = '20px', width = '30px' }) => css`
  height: 100%;
  width: ${width};
  box-sizing: border-box;
  position: relative;
  background-size: ${size};
  background-repeat: no-repeat;
  background-position: center;
`;

export const button = css`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const rounded_button = ({ height, width }) => css`
  ${button}
  height: ${height};
  width: ${width};
  border-radius: ${height / 2};
`;

// creates a button with an icon
export const iconed_button = ({ size = '20px', width = '30px' }) => css`
  ${button}
  ${icon_base({ size, width })}
`;

// creates a button with text
export const text_button = ({ heigth = '30px', width = '30px' }) => css`
  ${button}
  height: ${height};
  width: ${width};
  padding: 0;
`;

/**
 * creates a checkbox icon, generally in a span in a label next to an input checkbox or radio tag
    <input checkbox />
    <label>
        <span checkbox />
        <span text />
    </label>
 */
export const checkbox = ({ size = '20px', height = '30px', width = '30px' }) => css`
  ${icon_base({ size, width })}
  height: ${height};
  vertical-align: middle;
`;

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
export const partial_border = ({ side, border, length = '5px' }) => {
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

/* eslint-enable */

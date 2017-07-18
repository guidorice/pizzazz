/* eslint-disable no-multi-spaces */

import { rgba } from 'polished';

/* BLACKS AND WHITES */
export const colorless        = 'rgba(255, 255, 255, 0)';
export const white            = '#ffffff';
export const black            = '#333333';

export const gray__xxx_light  = '#fafafa';
export const gray__xx_light   = '#f5f5f5';
export const gray__x_light    = '#f0f0f0';
export const gray__light      = '#e6e6e6';
export const gray             = '#c8c8c8';
export const gray__dark       = '#aaaaaa';
export const gray__x_dark     = '#8c8c8c';
export const gray__xx_dark    = '#6b6b6b';
export const gray__xxx_dark   = '#626366'; /* brand-01 */

/* RAINBOW */
export const purple           = '#84449a'; /* brand-02 */
export const red              = '#ec1e24'; /* brand-03 */
export const red__dark        = '#cb3618';
export const orange           = '#ef5839';
export const yellow           = '#f7991c'; /* brand-04 */
export const green            = '#52b847'; /* brand-05 */
export const blue__x_light    = '#e6edf5';
export const blue__light      = '#3b96d2';
export const blue             = '#2b94bf'; /* brand-06 */
export const blue__dark       = '#0e71b3';

/* PRIMARY, SECONDARY, BACKGROUND, BOUNDARY and BRAND */
export const primary = {
  dark        : black,
  blue        : blue__dark,
  red         : red__dark,
};

export const secondary = {
  dark        : gray__xx_dark,
  blue        : blue__light,
  red         : orange,
};

export const fill = {
  ui_01       : white,
  ui_02       : gray__xxx_light,
  ui_03       : gray__xx_light,
  ui_04       : gray__x_light,
};

export const stroke = {
  ui_01       : gray__light,
  ui_02       : gray,
  ui_03       : gray__dark,
  ui_04       : gray__x_dark,
};

export const brand = {
  gray        : gray__xxx_dark,
  purple      : purple,
  red         : red,
  yellow      : yellow,
  green       : green,
  blue        : blue,
}

const scrimTop = rgba( 59, 150, 210, 0.4 );
const scrimBottom = rgba( 115, 178, 94, 0.4 );
export const scrim = `linear-gradient(${scrimTop}, ${scrimBottom})`;


/* eslint-enable no-multi-spaces */

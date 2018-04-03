import * as fonts from './fonts';
import { focus_blue } from './colors';

/******************* TEXT *******************/
export const text = ({size = 'medium', weight = 'normal', code = false}) => {
    const fontBase    = code ? fonts.codeFontBase                   : fonts.fontBase;
    const fontSize    = code ? fonts.codeSizes[size] || size        : fonts.sizes[size] || size;
    const lineHeight  = code ? fonts.codeLineHeights[size] || size  : fonts.lineHeights[size] || size;
    const fontWeight  = fonts.weights[weight] || weight;
    return {
        ...fontBase(),
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
    };
};

export const text_box = ({ height = '1rem', lineHeight = '1rem' }) => {
  return {
      height: height,
      lineHeight: lineHeight,
      textAlign: 'center',
  };
};

export const ellipsis = _ => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
});

/******************* FLEXBOX *******************/
export const flex = ({ display = 'flex', direction = 'row', justify = 'flex-start', align = 'stretch', wrap = 'nowrap' } ) => ({
    display,
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    alignItems: align,
});

export const flex_row = ({ justify = 'flex-start', align = 'stretch', wrap = 'nowrap' }) => {
    return flex({ direction: 'row', justify, align, wrap });
};

export const flex_column = ({ justify = 'flex-start', align = 'stretch', wrap = 'nowrap' }) => {
    return flex({ direction: 'column', justify, align, wrap });
};

/******************* POSITIONING *******************/
export const self_center = _ => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
});

export const self_center_horiz = _ => ({
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
});

/******************* LISTS *******************/
export const scrollable = ({ direction = 'x' }) => {
  let res = {};
  let dir = direction.toUpperCase();
  res[`overflow${dir}`] = 'auto';
  res.overflowScrolling = 'touch';
  return res;
};

/******************* CONTAINERS *******************/
export const lego_container = (size = '.25rem') => ({
   padding: size,
});

export const lego_block = (size = '.25rem') => ({
    margin: `0 ${size}`,
    padding: `${size} 0`,
});

/******************* BUTTONS AND ICONS *******************/
export const icon_base = ({ size = '20px', width = '30px'}) => ({
    height: '100%',
    width: width,
    boxSizing: 'border-box',
    position: 'relative',
    backgroundSize: size,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
});

export const button = _ => ({
    'background': 'none',
    'border': 'none',
    'cursor': 'pointer',
    'outline': 'none',
    ':focus': {
        outline: `2px solid ${focus_blue}`,
    },
});

export const rounded_button = ({
    height = throwIfMissing('height'),
    width = throwIfMissing('width'),
}) => ({
    ...button(),
    width,
    height,
    borderRadius: height / 2,
});

// creates a button with an icon
export const iconed_button = ({ size = '20px', width = '30px' } ) => ({
    ...icon_base({ size, width }),
    ...button(),
});

// creates a button with text
export const text_button = ({ height = '30px', width = '30px' }) => ({
    ...button({ height, width }),
    height,
    width,
    padding: 0,
});

export const rounded_outline = ({ size = '2px', color = 'gray' }) => ({
    outline: 'none',
    boxShadow: `0 0 0 ${size} ${color}`,
});

/**
 * creates a checkbox icon, generally in a span in a label next to an input checkbox or radio tag
    <input checkbox />
    <label>
        <span checkbox />
        <span text />
    </label>
 */
export const checkbox = ({ size = '20px', height = '30px', width = '30px' }) => ({
    ...icon_base({ size, width }),
    height,
    verticalAlign: 'middle',
});

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
 *    partial_border({ side: 'left', border: '1px solid black', length:
  *    '7px' });
 *
 * Note: the parent element of the pseudo selector may require `position: relative`
 */
export const partial_border = ({
       side = throwIfMissing('side'),
       border = throwIfMissing('border'),
       length = '5px',
}) => {
    const isVertical = side === 'right' || side === 'left';
    const size = `calc(100% - (${length} * 2));`;
    const after = {
        content: '',
        position: 'absolute',
    };
    if(isVertical) {
        after.height = size;
        after.top = length;
    } else {
        after.width = size;
        after.left = length;
    }
    after[`border${ucfirst(side)}`] = border;
    return { '&::after': after };
};

function throwIfMissing(name) {
  throw new Error(`missing style param: ${name}`)
}

function ucfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


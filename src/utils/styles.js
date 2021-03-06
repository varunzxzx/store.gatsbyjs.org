import { css } from 'react-emotion';

/*
 * NOTE: use a six-character hex code for all colors to allow alpha channel
 * adjustment without adding extra vars and/or a color manipulation lib.
 *
 * Example:
 *    // use the brand color at 25% opacity
 *    border-color: ${colors.brand}40;
 */
export const colors = {
  brand: '#663399',
  brandLight: '#fbf6ff',
  lightest: '#ffffff',
  darkest: '#4d4058',
  textLight: '#7e718a',
  text: '#766889'
};

const defaultFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Open Sans',
  'Helvetica Neue',
  'sans-serif'
].join();

export const fonts = {
  body: defaultFontStack,
  heading: `Futura PT, ${defaultFontStack}`
};

export const button = {
  default: css`
    background-color: ${colors.lightest};
    border: 1px solid ${colors.brand}22;
    border-radius: 3px;
    box-sizing: border-box;
    color: ${colors.textLight};
    cursor: pointer;
    display: block;
    font-family: ${fonts.heading};
    margin: 0;
    padding: 2px;
    text-align: center;
    text-decoration: none;
    transition: 200ms background linear;

    :focus,
    :hover {
      background: ${colors.brand}0c;
    }
  `,
  big: css`
    font-size: 1.25rem;
    padding: 0.25em 0.625em;
  `,
  purple: css`
    background-color: ${colors.textLight};
    border-color: ${colors.darkest};
    color: ${colors.lightest};
    cursor: pointer;
    display: block;
    margin-top: 0.75rem;
    width: 100%;

    :focus,
    :hover {
      background-color: ${colors.brand};
    }
  `
};

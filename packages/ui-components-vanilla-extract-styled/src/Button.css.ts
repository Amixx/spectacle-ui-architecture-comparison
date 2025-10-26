import { style } from '@vanilla-extract/css';
import { theme } from './theme.css';

export const button = style({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.base,
  padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
  background: theme.color.primary,
  color: 'white',
  border: 'none',
  borderRadius: theme.borderRadius,
  cursor: 'pointer',
  transition: `background ${theme.transition}`,
  ':hover': {
    background: theme.color.primaryHover,
  },
  ':disabled': {
    background: theme.color.disabled,
    cursor: 'not-allowed',
  },
});

import { style } from '@vanilla-extract/css';
import { theme } from './theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xs,
});

export const label = style({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.sm,
  color: theme.color.textSecondary,
  fontWeight: 500,
});

export const input = style({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.base,
  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
  border: `${theme.borderWidth} solid ${theme.color.border}`,
  borderRadius: theme.borderRadius,
  background: theme.color.bg,
  color: theme.color.text,
  transition: `border-color ${theme.transition}`,
  ':focus': {
    outline: 'none',
    borderColor: theme.color.borderFocus,
  },
  ':disabled': {
    background: theme.color.bgHover,
    color: theme.color.disabled,
    cursor: 'not-allowed',
  },
});

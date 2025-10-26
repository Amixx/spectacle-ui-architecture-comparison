import { style } from '@vanilla-extract/css';
import { theme } from './theme.css';

export const container = style({
  position: 'relative',
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

export const button = style({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.base,
  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
  border: `${theme.borderWidth} solid ${theme.color.border}`,
  borderRadius: theme.borderRadius,
  background: theme.color.bg,
  color: theme.color.text,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing.sm,
  transition: `background ${theme.transition}, border-color ${theme.transition}`,
  textAlign: 'left',
  ':hover': {
    background: theme.color.bgHover,
  },
  ':focus': {
    outline: 'none',
    borderColor: theme.color.borderFocus,
  },
});

export const listBox = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  marginTop: theme.spacing.xs,
  padding: theme.spacing.xs,
  background: theme.color.bg,
  border: `${theme.borderWidth} solid ${theme.color.border}`,
  borderRadius: theme.borderRadius,
  listStyle: 'none',
  zIndex: 10,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  maxHeight: '200px',
  overflowY: 'auto',
});

export const option = style({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.base,
  padding: theme.spacing.sm,
  cursor: 'pointer',
  borderRadius: '4px',
  color: theme.color.text,
  ':hover': {
    background: theme.color.bgHover,
  },
});

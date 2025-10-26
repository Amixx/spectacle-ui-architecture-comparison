import { style } from '@vanilla-extract/css';
import { theme } from './theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.md,
  maxWidth: '800px',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: theme.spacing.xs,
});

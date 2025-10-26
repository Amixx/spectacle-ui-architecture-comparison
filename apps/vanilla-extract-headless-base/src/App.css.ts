import { style } from '@vanilla-extract/css';
import { theme } from './skin/theme.css';

export const app = style({
  minHeight: '100vh',
  background: theme.color.bg,
  fontFamily: theme.fontFamily,
  color: theme.color.text,
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `${theme.spacing.lg} 20px`,
});

export const skinSwitcher = style({
  display: 'flex',
  gap: theme.spacing.xs,
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing.lg,
  padding: '24px',
  background: `color-mix(in srgb, ${theme.color.primary} 5%, transparent)`,
  borderRadius: theme.borderRadius,
  borderLeft: `4px solid ${theme.color.primary}`,
});

export const skinSwitcherTitle = style({
  margin: 0,
  fontSize: '20px',
  fontWeight: 'bold',
  color: theme.color.primary,
});

export const themeLink = style({
  color: theme.color.primary,
  textDecoration: 'none',
  fontWeight: 600,
  transition: `color ${theme.transition}`,
  ':hover': {
    color: theme.color.primaryHover,
    textDecoration: 'underline',
  },
});

export const demoSection = style({
  marginBottom: theme.spacing.lg,
  padding: '24px',
  border: `2px solid ${theme.color.border}`,
  borderRadius: theme.borderRadius,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
});

export const sectionTitle = style({
  marginTop: 0,
  marginBottom: '24px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: theme.color.text,
});

export const demoGroup = style({
  marginBottom: '24px',
});

export const groupTitle = style({
  marginBottom: theme.spacing.md,
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontWeight: 600,
});

export const buttonGroup = style({
  display: 'flex',
  gap: theme.spacing.md,
});

export const fontConfig = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.md,
  maxWidth: '800px',
});

export const fontConfigGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: theme.spacing.xs,
});

export const configOutput = style({
  marginTop: '24px',
  padding: '20px',
  background: theme.color.bgHover,
  borderRadius: theme.borderRadius,
  border: `${theme.borderWidth} solid ${theme.color.border}`,
});

export const configOutputTitle = style({
  marginTop: 0,
  marginBottom: theme.spacing.md,
  fontSize: '18px',
  fontWeight: 'bold',
  color: theme.color.primary,
});

export const configPre = style({
  margin: 0,
  fontFamily: 'monospace',
  fontSize: '13px',
});

import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  color: {
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    border: '#d1d5db',
    borderFocus: '#3b82f6',
    bg: '#ffffff',
    bgHover: '#f3f4f6',
    text: '#111827',
    textSecondary: '#6b7280',
    disabled: '#9ca3af',
  },
  fontSize: {
    sm: '14px',
    base: '16px',
  },
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
  },
  borderRadius: '6px',
  borderWidth: '1px',
  transition: '0.2s',
});

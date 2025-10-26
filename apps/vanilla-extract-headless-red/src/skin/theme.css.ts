import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  color: {
    primary: '#ef4444',
    primaryHover: '#dc2626',
    border: '#e5e7eb',
    borderFocus: '#f87171',
    bg: '#ffffff',
    bgHover: '#f9fafb',
    text: '#111827',
    textSecondary: '#6b7280',
    disabled: '#d1d5db',
  },
  fontSize: {
    sm: '13px',
    base: '15px',
  },
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  spacing: {
    xs: '4px',
    sm: '10px',
    md: '14px',
    lg: '18px',
  },
  borderRadius: '8px',
  borderWidth: '1px',
  transition: '0.2s',
});

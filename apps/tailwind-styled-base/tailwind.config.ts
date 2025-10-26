import type { Config } from "tailwindcss";
import preset from "../tailwind-preset";

export default {
  presets: [preset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../ui-components-tailwind-styled/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb",
        },
        border: {
          DEFAULT: "#d1d5db",
          focus: "#3b82f6",
        },
        bg: {
          DEFAULT: "#ffffff",
          hover: "#f3f4f6",
        },
        text: {
          DEFAULT: "#1f2937",
          secondary: "#6b7280",
        },
        disabled: "#9ca3af",
      },
      fontSize: {
        sm: "14px",
        base: "16px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
      borderRadius: {
        DEFAULT: "6px",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
} satisfies Config;

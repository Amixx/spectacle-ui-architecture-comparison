import type { Config } from "tailwindcss";
import preset from "../tailwind-preset";

export default {
  presets: [preset],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ef4444",
          hover: "#dc2626",
        },
        border: {
          DEFAULT: "#e5e7eb",
          focus: "#f87171",
        },
        bg: {
          DEFAULT: "#ffffff",
          hover: "#f9fafb",
        },
        text: {
          DEFAULT: "#111827",
          secondary: "#6b7280",
        },
        disabled: "#d1d5db",
      },
      fontSize: {
        sm: "13px",
        base: "15px",
        lg: "18px",
        xl: "20px",
        "2xl": "26px",
      },
      spacing: {
        xs: "6px",
        sm: "10px",
        md: "14px",
        lg: "18px",
        xl: "24px",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
} satisfies Config;

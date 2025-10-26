import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "",
          hover: "",
        },
        border: {
          DEFAULT: "",
          focus: "",
        },
        bg: {
          DEFAULT: "",
          hover: "",
        },
        text: {
          DEFAULT: "",
          secondary: "",
        },
        disabled: "",
      },
      fontSize: {
        sm: "",
        base: "",
      },
      spacing: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
      },
      borderRadius: {
        DEFAULT: "",
      },
      borderWidth: {
        DEFAULT: "",
      },
      transitionDuration: {
        DEFAULT: "",
      },
    },
  },
} satisfies Partial<Config>;

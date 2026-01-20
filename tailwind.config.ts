import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))"
        },
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        secondary: "hsl(var(--secondary))",
        success: "hsl(var(--success))",
        error: "hsl(var(--error))"
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)"
      },
      boxShadow: {
        soft: "0 14px 40px -32px rgba(0,0,0,0.45)",
        glow: "0 0 0 1px rgba(0,0,0,0.06), 0 20px 60px -40px rgba(0,0,0,0.4)"
      },
      fontFamily: {
        sans: ["Avenir Next", "Avenir", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Avenir Next", "Avenir", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

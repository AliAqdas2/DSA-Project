/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#c7c6c2",
        "secondary": "#5e5f5b",
        "surface-dim": "#ddd9d8",
        "surface-bright": "#fdf8f7",
        "surface-container-low": "#f7f3f2",
        "surface-tint": "#5f5e5d",
        "error": "#ba1a1a",
        "primary": "#000000",
        "primary-fixed": "#e5e2e0",
        "on-surface-variant": "#464742",
        "on-primary-fixed-variant": "#474745",
        "surface-variant": "#e5e2e1",
        "on-tertiary-fixed-variant": "#484646",
        "inverse-on-surface": "#f4f0ef",
        "on-primary-fixed": "#1c1c1a",
        "on-error": "#ffffff",
        "background": "#fdf8f7",
        "tertiary": "#000000",
        "on-secondary-fixed-variant": "#464744",
        "secondary-fixed": "#e4e2de",
        "outline": "#777871",
        "on-background": "#1c1b1b",
        "surface": "#fdf8f7",
        "on-secondary": "#ffffff",
        "on-surface": "#1c1b1b",
        "surface-container-high": "#ebe7e6",
        "on-secondary-fixed": "#1b1c19",
        "secondary-container": "#e1e0db",
        "primary-container": "#1c1c1a",
        "inverse-primary": "#c9c6c4",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "error-container": "#ffdad6",
        "on-tertiary-fixed": "#1c1b1b",
        "on-primary-container": "#858382",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "#e5e2e1",
        "inverse-surface": "#313030",
        "primary-fixed-dim": "#c9c6c4",
        "on-secondary-container": "#62635f",
        "on-tertiary-container": "#868383",
        "tertiary-container": "#1c1b1b",
        "tertiary-fixed-dim": "#cac5c5",
        "on-error-container": "#93000a",
        "tertiary-fixed": "#e6e1e1",
        "surface-container": "#f1edec",
        "outline-variant": "#c7c7c0"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "margin-mobile": "16px",
        "stack-lg": "32px",
        "stack-md": "16px",
        "gutter": "24px",
        "unit": "4px",
        "margin-desktop": "40px",
        "container-max": "1200px",
        "stack-sm": "8px"
      },
      fontFamily: {
        "headline-md": ["DM Serif Display", "serif"],
        "body-md": ["DM Sans", "sans-serif"],
        "display-lg-mobile": ["DM Serif Display", "serif"],
        "display-lg": ["DM Serif Display", "serif"],
        "label-caps": ["DM Sans", "sans-serif"],
        "metadata": ["DM Sans", "sans-serif"],
        "body-lg": ["DM Sans", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "display-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "400" }],
        "display-lg": ["48px", { "lineHeight": "1.1", "fontWeight": "400" }],
        "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "metadata": ["14px", { "lineHeight": "1.4", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "-0.01em", "fontWeight": "300" }]
      },
      keyframes: {
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      borderColor: {
        'loader': '#3498db',
      },
    },
  },
  plugins: [],
}


const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      main: "#081B43",
      white: "#ffffff",
      grey: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      },
      red: "#b80009",
      black: "#000",
      violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95"
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
      },
      secMain: "#F3C206",
      green: {
        50: 'rgb(240 253 244)',
        100: 'rgb(220 252 231)',
        200: 'rgb(187 247 208)',
        300: 'rgb(134 239 172)',
        400: 'rgb(74 222 128)',
        500: 'rgb(34 197 94)',
        600: 'rgb(22 163 74)',
        700: 'rgb(21 128 61)',
        800: 'rgb(22 101 52)',
        900: 'rgb(20 83 45)',
      }
    },
    extend: {
      width: {
        '98': '26 rem',
        '100': '28 rem',
        '102': '30 rem',
        '104': '32 rem',
        '106': '34 rem',
        '108': '36 rem',
        '110': '38 rem',
        '112': '40 rem',
        '113': '41 rem',
        '114': '42 rem',
      },
      height: {
        '98': '26rem',
        '98.5': '26.5rem',
        '100': '28rem',
        '102': '30rem',
        '104': '32rem',
        '106': '34rem',
        '108': '36rem',
        '110': '38rem',
        '112': '40rem',
        '112.5': '42.75rem',
        '114': '44rem',
        '116': '48rem',
        '118': '52rem',
        '120': '54rem',
        '122': '58rem',
      },
      ml: {
        '98': '26rem',
        '98.5': '26.5rem',
        '100': '28rem',
        '102': '30rem',
        '104': '32rem',
        '106': '34rem',
        '108': '36rem',
        '110': '38rem',
        '112': '40rem',
        '112.5': '42.75rem',
        '114': '44rem',
        '116': '48rem',
        '118': '52rem',
        '120': '54rem',
        '122': '58rem',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}
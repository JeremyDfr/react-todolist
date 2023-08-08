/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'coral': {
          '50': '#fff3ed',
          '100': '#ffe4d4',
          '200': '#ffc5a9',
          '300': '#ff8956',
          '400': '#fe6939',
          '500': '#fc4113',
          '600': '#ed2709',
          '700': '#c51909',
          '800': '#9c1610',
          '900': '#7e1510',
          '950': '#440706',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

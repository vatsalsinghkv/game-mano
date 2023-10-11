import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--color-text)',
        bg: {
          primary: 'var(--color-bg)',
          secondary: 'var(--color-bg-secondary)',
        },
        accent: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
        },
        dark: {
          base: 'var(--color-dark)',
          invert: 'var(--color-light)',
          1: 'var(--color-dark-1)',
          2: 'var(--color-dark-2)',
          3: 'var(--color-dark-3)',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, var(--color-grad-primary))',
        'gradient-secondary':
          'linear-gradient(90deg, var(--color-grad-secondary))',
      },
    },
  },
  plugins: [],
};
export default config;

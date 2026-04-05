import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f7',
          100: '#ddf1ed',
          200: '#bae3db',
          300: '#8dd1c3',
          400: '#5eb5a6',
          500: '#3d9b8f',
          600: '#2d7a73',
          700: '#25615f',
          800: '#1f4d4c',
          900: '#1b3f3e',
          950: '#0f2625',
        },
        forest: {
          dark: '#0a1a19',
          medium: '#1a3d3a',
          light: '#2d7a73',
          accent: '#4db8a6',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#d0d0d0',
          400: '#999999',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      spacing: {
        section: '5rem',
        'section-sm': '2rem',
      },
    },
  },
  plugins: [],
}

export default config

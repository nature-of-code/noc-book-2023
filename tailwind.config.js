module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        noc: {
          400: '#f166c0',
          600: '#d30051',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            blockquote: {
              quotes: 'none',
              '& > p': {
                marginTop: '0.4em',
                marginBottom: '0.4em',
              },
            },
            code: {
              background: theme('colors.gray[100]'),
              padding: '0.2em 0.4em',
              borderRadius: '0.2em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

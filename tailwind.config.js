/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('./images/bg_footer.png')",
        estrela: "url('./images/estrela_header.png')",
      },
    },
  },
  plugins: [],
};

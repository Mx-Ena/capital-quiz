/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',        // Scan all HTML files in the root directory
    './src/**/*.js',   // Scan all JS files in the src/ folder
    './*.js'           // Scan any JS files in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

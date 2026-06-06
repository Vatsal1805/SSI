/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-card': 'var(--bg-card)',
        'bg-card-hover': 'var(--bg-card-hover)',
        'accent-orange': 'var(--accent-orange)',
        'accent-orange-hover': 'var(--accent-orange-hover)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border-subtle': 'var(--border-subtle)',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        hindi: ['"Mukta"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

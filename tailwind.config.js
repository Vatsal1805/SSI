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
        'accent-orange-soft': 'var(--accent-orange-soft)',
        'accent-orange-hover': 'var(--accent-orange-hover)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border-subtle': 'var(--border-subtle)',
        
        // Light section colors
        'bg-light': 'var(--bg-light)',
        'bg-light-card': 'var(--bg-light-card)',
        'bg-light-card-hover': 'var(--bg-light-card-hover)',
        'text-light-primary': 'var(--text-on-light-primary)',
        'text-light-secondary': 'var(--text-on-light-secondary)',
        'text-light-muted': 'var(--text-on-light-muted)',
        'border-light': 'var(--border-light)',
        'border-light-hover': 'var(--border-light-hover)',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        hindi: ['"Mukta"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

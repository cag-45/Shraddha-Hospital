/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        med: {
          blue: '#0B57D0',         // Clinical Healthcare Blue
          blueDark: '#083884',     // Deep Hospital Navy
          blueLight: '#E8F0FE',    // Soft Medical Blue Tint
          cyan: '#0284C7',         // Medical Cyan
          teal: '#0D9488',         // Healing Teal
          green: '#16A34A',        // Verified Green
          red: '#DC2626',          // Emergency Red
          slate: '#1E293B',        // Primary Text Slate
          muted: '#64748B',        // Secondary Text
          bg: '#F8FAFC',           // Clean Off-White Background
          surface: '#FFFFFF',      // Pure White Surface
          border: '#E2E8F0',       // Crisp Border
        }
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        heading: ['"Manrope"', '"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'med-sm': '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)',
        'med-md': '0 6px 16px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.04)',
        'med-lg': '0 16px 36px -8px rgba(15, 23, 42, 0.12), 0 6px 14px -4px rgba(15, 23, 42, 0.05)',
      }
    },
  },
  plugins: [],
}

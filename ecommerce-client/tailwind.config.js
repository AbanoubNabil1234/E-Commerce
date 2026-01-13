/** @type {import('tailwindcss').Config} */
// ==============================================
// Tailwind CSS Configuration
// ==============================================
// Customized for E-Commerce platform with
// enterprise color palette and component utilities
// ==============================================

module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    darkMode: 'class', // Enable dark mode with class strategy
    theme: {
        extend: {
            colors: {
                // Premium Slate Neutrals (Blue-ish Grays)
                gray: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                },
                // Rich Indigo Primary (Trustworthy & Digital)
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                    950: '#1e1b4b',
                },
                // Dark mode surface colors
                dark: {
                    bg: '#0f0f14',
                    surface: '#1a1a24',
                    card: '#24242e',
                    border: '#334155',
                },
                // Accent colors
                gold: {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                arabic: ['Cairo', 'Tajawal', 'sans-serif'],
                display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'glow': '0 0 15px rgba(79, 70, 229, 0.3)',
                'glow-lg': '0 0 25px rgba(99, 102, 241, 0.4)',
                'card-hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
                'cta': '0 4px 14px rgba(99, 102, 241, 0.4)',
                'cta-hover': '0 8px 25px rgba(99, 102, 241, 0.5)',
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                'cta-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'scale-in': 'scaleIn 0.3s ease-out forwards',
                'slide-in-right': 'slideInRight 0.4s ease-out forwards',
                'pulse-soft': 'pulseSoft 2s infinite ease-in-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                slideInRight: {
                    from: { opacity: '0', transform: 'translateX(20px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
        },
    },
    plugins: [],
}


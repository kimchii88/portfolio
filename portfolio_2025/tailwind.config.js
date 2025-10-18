/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 12s linear infinite",
            },
        },
    },
    plugins: [],
};

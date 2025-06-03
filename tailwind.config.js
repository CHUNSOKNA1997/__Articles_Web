// tailwind.config.js
module.exports = {
    darkMode: "class", // or 'media'
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                khmer: ['"Kantumruy Pro"', "sans-serif"],
            },
        },
    },
    plugins: [],
};

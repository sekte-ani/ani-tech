/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#e5e7eb",
                primary2: '#4C9DAE',
                button: "#3b82f6",
                buttonhover: "#1d4ed8",
                dark2: "#374151",
                dark: "#1F2937",
                darkui: '#2E5268',
                tcolor1: '#88C1CD',
                tcolor2: '#C4DEE3',
                tcolor: '#3E8A99',
                bgui: '#E5F1F4',
                icon1: '#3756A3',
                icon2: '#F077A2',
                icon3: '#74C0C8',
                icon4: '#ED946E',


            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
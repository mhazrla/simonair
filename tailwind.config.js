const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Montserrat",
                    "Lato",
                    "Garamond",
                    "Poppins",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                primary: "#FBFDFF",
                fontPrimary: "#494949",
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("daisyui")],
};

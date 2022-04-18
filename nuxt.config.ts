import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/style.css"],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        transpile: ['@heroicons/vue']
    },
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL || 'https://www.lava.financial'
    }
});

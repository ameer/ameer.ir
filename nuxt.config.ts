// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            htmlAttrs: {
                lang: 'fa'
            },
        }
    },
    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) =>
                config.plugins.push(vuetify({ styles: { configFile: './assets/variables.scss' } }))
            );
        },
    ],
    css: ['vuetify/lib/styles/main.sass', '@/assets/main.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    }

})

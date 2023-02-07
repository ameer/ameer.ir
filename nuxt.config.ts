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
                config.plugins.push(vuetify({
                    styles: {
                        configFile: './assets/settings.scss'
                    }
                }))
            );
        },
    ],
    css: ['@/assets/main.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    }

})

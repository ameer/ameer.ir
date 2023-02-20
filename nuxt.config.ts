// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: false,
    nitro: {
        preset: 'service-worker'
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'fa'
            },
        }
    },

    modules: [
        '@nuxt/content',
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) =>
                // @ts-ignore
                config.plugins.push(vuetify({
                    styles: {
                        configFile: './assets/settings.scss'
                    }
                }))
            );
        },
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
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

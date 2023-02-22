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
        '@nuxt/image-edge',
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
    image: {
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
            xs: 320,
            sm: 600,
            md: 960,
            lg: 1265,
            xl: 1905,
        },
        presets: {
            introCard: {
                modifiers: {
                    format: 'webp',
                    height: 256,
                    quality: 70
                }
            },
            scrollingImage: {
                modifiers: {
                    format: 'webp',
                    height: 200,
                    quality: 85
                }
            }
        }
    },
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

// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: false,

    app: {
        head: {
            title: 'Ameer Mousavi',
        }
    },

    modules: [
        // @ts-ignore
        '@nuxtjs/i18n',
        '@nuxt/content',
        '@nuxt/image-edge',
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
    image: {
        provider: 'netlify',
        screens: {
            xs: 320,
            sm: 600,
            md: 960,
            lg: 1264,
            xl: 1904,
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
                    quality: 100
                }
            }
        }
    },
    i18n: {
        locales: [
            {
                code: 'fa',
                iso: 'fa-IR',
                dir: 'rtl',
                name: 'Persian',
                file: 'fa-IR.json'
            },
            {
                code: 'en',
                iso: 'en-US',
                dir: 'ltr',
                name: 'English',
                file: 'en-US.json'
            }
        ],
        seo: true,
        detectBrowserLanguage: false,
        defaultLocale: 'en',
        langDir: 'lang',
        vueI18n: {
            fallbackLocale: 'en',
        }
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
        experimental: {
            clientDb: true
        }

    },
    css: ['@/assets/main.css'],
    build: {
        transpile: ['vuetify'],
    },
    // experimental: { payloadExtraction: false },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    }

})

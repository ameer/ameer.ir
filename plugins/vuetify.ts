import { fa } from 'vuetify/locale'
import "vuetify/styles"
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
const darkTheme = {
    dark: true,
    colors: {
        surface: '#20202a',
        background: '#191923'
    },
    variables: {
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.60,
        'disabled-opacity': 0.38,
    }
}
// @ts-ignore
const i18n = new createI18n({
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n
    locale: 'fa',
    fallbackLocale: 'en'
})
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: false,
        theme: {
            defaultTheme: 'darkTheme',
            themes: {
                darkTheme
            }
        },
        locale: {
            adapter: createVueI18nAdapter({ i18n, useI18n }),
            rtl: {
                fa: true
            }
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            }
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
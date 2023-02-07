import { fa } from 'vuetify/locale'
import "vuetify/styles"
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
const darkTheme = {
    dark: true,
    colors: {
        surface: '#20202a',
    }
}
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
            locale: 'fa',
            messages: fa,
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
import { fa } from 'vuetify/locale'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'dark'
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
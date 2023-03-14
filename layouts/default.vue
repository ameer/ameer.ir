<template>
    <v-app>
        <v-app-bar :elevation="2" class="d-block d-lg-none">
            <v-app-bar-title class="text-center font-weight-bold">{{ $t('Ameer Mousavi') }}</v-app-bar-title>
        </v-app-bar>
        <v-container class="page-wrapper d-flex pa-0 position-relative" :class="drawerOpenClass" style="max-width: 1440px;">
            <images-top-faded />
            <side-nav />
            <div class="side-nav__overlay" @click="closeSideNav"></div>
            <side-menu-bar />
            <v-main>
                <slot />
            </v-main>
        </v-container>
    </v-app>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useLocale } from 'vuetify'


const i18nHead = useLocaleHead({
    addSeoAttributes: true,
    addDirAttribute: true
})
const { current } = useLocale()
current.value = i18nHead.value.htmlAttrs!.lang.replace(/\-.*/, '')

useHead({
    htmlAttrs: {
        lang: i18nHead.value.htmlAttrs!.lang,
        dir: i18nHead.value.htmlAttrs!.dir
    },
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])]
})

useSeoMeta({
    title: 'Ameer Mousavi - Web Developer',
    ogTitle: 'Ameer Mousavi - Web Developer',
    description: 'Hi! Happy and curious web developer with experience in Javascript and PHP. Check out my portfolio website to see some of my projects and learn more about me.!',
    ogDescription: 'Hi! Happy and curious web developer with experience in Javascript and PHP. Check out my portfolio website to see some of my projects and learn more about me.!',
    ogImage: '/ameer-mousavi.png',
    twitterCard: 'summary_large_image',
})
const drawerOpenClass = ref('')
const { mdAndDown } = useDisplay()
useListen('sideNavIsOpen', (cssClass) => {
    drawerOpenClass.value = cssClass
})
useListen('sideNavIsClosed', () => {
    drawerOpenClass.value = ''
})
onUpdated(() => {
    closeSideNav()
})
const closeSideNav = () => {
    useEvent('closeSideNav')
    drawerOpenClass.value = ''
}
</script>
<style>
.page-wrapper {
    background: #1e1e28;
    overflow: hidden;
}

.v-locale--is-ltr .v-main {
    padding-left: 290px !important;
    transition: .55s ease-in-out !important;
}

.v-locale--is-rtl .v-main {
    padding-right: 290px !important;
}

.v-toolbar__content>.v-toolbar-title {
    margin-inline-start: 48px !important;
    margin-inline-end: 48px !important;

}
</style>
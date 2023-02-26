<template>
    <v-app>
        <v-app-bar :elevation="2" class="d-block d-lg-none">
            <v-app-bar-title class="text-center font-weight-bold">امیر موسوی</v-app-bar-title>
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
<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs';
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

.v-main {
    padding-right: 290px !important;
    transition: .55s ease-in-out !important;
}

.v-toolbar__content>.v-toolbar-title {
    margin-inline-start: 48px !important;
    margin-inline-end: 48px !important;

}
</style>
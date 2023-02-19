<template>
    <v-app>
        <v-app-bar :elevation="2" class="d-block d-lg-none">
            <v-app-bar-title class="text-center font-weight-bold">امیر موسوی</v-app-bar-title>
            <template v-slot:append>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
        </v-app-bar>
        <v-container class="page-wrapper d-flex pa-0 position-relative">
            <v-img class="top-img" max-height="512" cover src="/images/computer-2982270_1280.jpg">
                <div class="image-gradient-fade-bottom"></div>
            </v-img>
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
const drawer = ref(null)
const closeSideNav = () => {
    useEvent('closeSideNav')
}
</script>
<style>
.page-wrapper {
    background: #1e1e28;
    overflow-x: hidden;
}

.v-main {
    padding-right: 290px !important;
    padding-left: 80px !important;
}

.v-toolbar__content>.v-toolbar-title {
    margin-inline-start: 48px !important;

}
</style>
<template>
    <div class="social-bar">
        <template v-for="(link, k) in socialLinks" :key="`social-link-${k}`">
            <v-tooltip :text="link.title" :location="'top'" :theme="'light'">
                <template v-slot:activator="{ props }">
                    <a v-bind="props" :href="link.href" target="_blank" class="mx-2">
                        <v-icon :icon="`mdi-${link.icon}`"></v-icon>
                    </a>
                </template>
            </v-tooltip>
        </template>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const socialLinks = ref([
    { title: 'پروژه‌های من در گیت‌هاب', href: 'https://github.com/ameer', icon: 'github' },
    { title: 'حساب من در وردپرس', href: 'https://profiles.wordpress.org/amir-mousavi/', icon: 'wordpress' },
    { title: 'من در لینکدین', href: 'https://www.linkedin.com/in/ameer-mousavi/', icon: 'linkedin' },
])
</script>
<style>
.social-bar {
    bottom: 0;
    left: 0;
    height: var(--social-bar-height);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 35px;
    background: linear-gradient(159deg, rgba(37, 37, 50, .98) 0, rgba(35, 35, 45, .98) 100%);
    position: absolute;
    -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    width: 100%;
    z-index: 999;
}
</style>
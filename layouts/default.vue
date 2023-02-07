<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" class="">
            <v-card elevation="0" class="profile-card text-center rounded-0" color="#23232d">
                <v-card-text>
                    <v-avatar :size="128" class="mb-4">
                        <v-img :src="'/ameer-mousavi.jpg'"></v-img>
                    </v-avatar>
                    <h1 class="mb-2">امیر موسوی</h1>
                    <h2 class="text-medium-emphasis text-body-1">
                        طراح و توسعه‌دهنده وب
                    </h2>
                </v-card-text>
            </v-card>
            <div class="info-skill-container">
                <v-table density="compact" class="table-border-0">
                    <tbody>
                        <tr v-for="(item, i) in basicData" :key="`personal-data-item-${i}`" :title="item.title">
                            <td class="text-start">
                                <v-icon :icon="`mdi-${item.icon}`" size="18"
                                    class="text-medium-emphasis font-weight-light"></v-icon>
                            </td>
                            <td class="text-high-emphasis text-end text-body-2">{{ item.value }}</td>
                        </tr>
                    </tbody>
                </v-table>
                <div class="text-center px-4 mt-6 mb-4">
                    <v-divider thickness="4"></v-divider>
                </div>
                <v-container fluid class="px-4">
                    <v-row align="center" dense="">
                        <template v-for="(skill, j) in skills" :key="`skill-cols-${j}`">
                            <v-col cols="auto">
                                <v-icon :icon="`mdi-${skill.icon}`" size="18"
                                    class="text-medium-emphasis font-weight-light me-2"></v-icon>
                                <span class="text-body-2">{{ skill.title }}</span>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto">
                                <span class="text-disabled text-caption">
                                    {{ skill.value }} %
                                </span>
                            </v-col>
                            <v-col cols="12" class="mb-4">
                                <v-progress-linear :model-value="skill.value" :buffer-value="skill.buffer" stream
                                    color="amber"></v-progress-linear>
                            </v-col>
                        </template>
                    </v-row>
                </v-container>
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
            </div>
        </v-navigation-drawer>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>
<script setup>
import { ref } from 'vue'
const drawer = ref(null)
const basicData = ref([
    { title: 'سن و سال', value: Intl.NumberFormat('fa-IR').format(Math.floor((new Date() - new Date('1995-01-19')) / (1000 * 60 * 60 * 24 * 365))) + ' سال', icon: 'calendar-today' },
    { title: 'مدرک تحصیلی', value: 'کارشناسی', icon: 'certificate' },
    { title: 'وضعیت نظام وظیفه', value: 'پایان خدمت', icon: 'police-badge' },
    { title: 'محل سکونت', value: 'ایران، تهران', icon: 'home' },
])
const skills = ref([
    { title: 'HTML', icon: 'language-html5', value: 100, buffer: 0 },
    { title: 'CSS', icon: 'language-css3', value: 80, buffer: 0 },
    { title: 'JavaScript', icon: 'language-javascript', value: 75, buffer: 0 },
    { title: 'VueJS', icon: 'vuejs', value: 100, buffer: 0 },
    // { title: 'PHP', icon: 'language-php', value: 65, buffer: 0 },
    // { title: 'WordPress', icon: 'wordpress', value: 100, buffer: 0 },
    // { title: 'Laravel', icon: 'laravel', value: 50, buffer: 0 },
])
const socialLinks = ref([
    { title: 'پروژه‌های من در گیت‌هاب', href: 'https://github.com/ameer', icon: 'github' },
    { title: 'حساب من در وردپرس', href: 'https://profiles.wordpress.org/amir-mousavi/', icon: 'wordpress' },
    { title: 'من در لینکدین', href: 'https://www.linkedin.com/in/ameer-mousavi/', icon: 'linkedin' },
])
</script>
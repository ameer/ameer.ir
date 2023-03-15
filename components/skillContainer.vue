<template>
    <v-container fluid class="skill-container px-4">
        <v-row align="center" dense="">
            <template v-for="(skill, j) in skills" :key="`skill-cols-${j}`">
                <v-col cols="auto">
                    <v-icon :icon="`mdi-${skill.icon}`" size="18"
                        class="ct-medium-emphasis font-weight-light me-2"></v-icon>
                    <span class="text-body-2">{{ skill.title }}</span>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="auto">
                    <span class="text-disabled text-caption fa-num">
                        {{ skill.activeYears }}+ {{ $t('years') }}
                    </span>
                </v-col>
                <v-col cols="12" class="mb-4">
                    <v-progress-linear :model-value="skill.value" :buffer-value="skill.buffer" stream
                        color="amber"></v-progress-linear>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>
<script setup>
import { ref } from 'vue'
const skills = ref([
    { title: 'HTML', icon: 'language-html5', value: 100, buffer: 0, activeYears: 10 },
    { title: 'CSS', icon: 'language-css3', value: 80, buffer: 0, activeYears: 10 },
    { title: 'JavaScript', icon: 'language-javascript', value: 75, buffer: 0, activeYears: 8 },
    { title: 'VueJS', icon: 'vuejs', value: 100, buffer: 0, activeYears: 4 },
    { title: 'PHP', icon: 'language-php', value: 65, buffer: 0, activeYears: 9 },
    { title: 'WordPress', icon: 'wordpress', value: 100, buffer: 0, activeYears: 10 },
    { title: 'Laravel', icon: 'laravel', value: 50, buffer: 0, activeYears: 5 },
])
</script>
<style>
.info-skill-container {
    scrollbar-width: none !important;
    height: calc(100% - (var(--profile-card-height) + var(--info-margin-top) + var(--social-bar-height)));
    margin-top: var(--info-margin-top);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
}

.info-skill-container::-webkit-scrollbar {
    display: none;
}
</style>
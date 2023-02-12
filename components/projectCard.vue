<template>
    <v-card height="100%">
        <v-img :src="project.featuredImage" cover height="200px"></v-img>
        <v-card-title class="text-body-1">{{ project.title }}</v-card-title>
        <v-card-subtitle class="mt-n4">{{ project.desc }}</v-card-subtitle>
        <div class="d-flex align-center mt-3">
            <v-divider></v-divider>
            <div class="text-caption text-disabled mx-2 text-no-wrap">ساخته شده با</div>
            <v-divider></v-divider>
        </div>
        <v-card-text class="text-center">
            <v-icon v-for="(tech, i) in project.technologies" :key="`tech-icon-logo-${i}`" class="mx-2" :title="tech"
                :icon="`mdi-${tech}`" color="grey">
            </v-icon>
        </v-card-text>
    </v-card>
</template>
<script setup>
const props = defineProps({
    project: Object,
});
</script>
<style>

</style>

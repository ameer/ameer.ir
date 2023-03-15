<template>
    <v-card height="100%" :to="project._path">
        <div class="scrolling-image-container">
            <v-img :src="`img/projects/${project.featuredImage}`" height="85">
            </v-img>
        </div>
        <v-card-title class="text-body-1">{{ project.title }}</v-card-title>
        <v-card-subtitle class="mt-n4">{{ project.description }}</v-card-subtitle>
        <div class="d-flex align-center mt-3">
            <v-divider></v-divider>
            <div class="text-caption text-disabled mx-2 text-no-wrap">{{ $t('Built with') }}</div>
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
    project: Object
});
</script>
<style>
.scrolling-image-container {
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: #23232d;
}

/* img.scrolling-image {
    width: 100%;
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1);
    will-change: transform;
    transform: translateY(0);
    cursor: pointer;
}

img.scrolling-image:hover {
    transform: translateY(calc(-100% + 200px));
    transition-duration: 5s;
} */
</style>

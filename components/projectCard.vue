<template>
    <v-card height="100%" :to="project._path">

        <div class="scrolling-image-container" style="width:100%;">
            <nuxt-picture legacy-format="jpg" preset="scrollingImage"
                :src="`img/projects/${project.featuredImage}-landing.jpg`" :loading="project.featured > 0 ? 'auto' : 'lazy'"
                fit="fill" :modifiers="{ position: 'top' }" :height="200" sizes="sm:50vw md:320px lg:240px xxl:320px" />
        </div>
        <v-card-title class="text-body-1">{{ project.title }}</v-card-title>
        <v-card-subtitle class="mt-n4">{{ project.description }}</v-card-subtitle>
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
    height: { type: [Number, String], default: 200 }
});
const $img = useImage()
const _srcset = computed(() => {
    return $img.getSizes(`img/projects/${props.project.featuredImage}-landing.jpg`, {
        sizes: 'xs:100vw sm:50vw md:33vw xl:20vw',
        modifiers: {
            position: 'top', strategy: 'attention',
            gravity: 'center',
            fit: 'cover',
            format: 'webp',
            quality: 70,
            height: props.height
        }
    })
})
</script>
<style>
.scrolling-image-container {
    height: 200px;
    overflow: hidden;
}

img.scrolling-image {
    width: 100%;
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1);
    will-change: transform;
    transform: translateY(0);
    cursor: pointer;
}

img.scrolling-image:hover {
    transform: translateY(calc(-100% + 200px));
    transition-duration: 5s;
}
</style>

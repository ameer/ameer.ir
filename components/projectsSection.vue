<template>
    <v-col cols="12" sm="6" md="4" xxl="4" v-for="(project, i) in projects" :key="`project-col-${i}`" class="">
        <ProjectCard :project="project" />
    </v-col>
</template>
<script setup>
const { path } = useRoute()
const { data: projects } = await useAsyncData(`content-${path}`, () => {
    return queryContent('projects')
        .only(['_path', 'title', 'description', 'technologies', 'featuredImage', 'hasScrollableImage', 'dateTime', 'featured', 'slug'])
        .sort({ dateTime: -1, featured: 1 })
        .find()
})
</script>
<style></style>
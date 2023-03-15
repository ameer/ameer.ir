<template>
    <v-col class="mt-8 d-flex align-center" cols="12">
        <h2>{{ $t('My Projects') }}</h2>
        <template v-if="enableFilter">
            <v-spacer></v-spacer>
            <span class="ct-medium-emphasis">فیلتر:</span>
            <v-chip-group v-model="currentFilter" column>
                <v-chip v-for="(filter, i) in filters" :key="`filter-${i}`" filter variant="tonal" :value="filter">
                    {{ filter }}
                </v-chip>
            </v-chip-group>
        </template>
    </v-col>
    <TransitionGroup name="list" tag="div" class="d-contents">
        <v-col cols="12" sm="6" md="4" xxl="4" v-for="(project, i) in projects" :key="`project-col-${i}`" class="">
            <ProjectCard :project="project" />
        </v-col>
    </TransitionGroup>
</template>
<script setup>
import { ref, computed } from 'vue'
const { locale } = useI18n({
    useScope: 'local'
})
const props = defineProps({
    enableFilter: { type: Boolean, default: false },
})
const filters = ref(['All', 'VueJS', 'WordPress'])
const currentFilter = ref('All')

const { path } = useRoute()
console.log(locale.value, path)
const { data } = await useAsyncData(`content-${locale.value}-${path}`, () => {
    return queryContent(`${locale.value}/projects`)
        .only(['_path', 'title', 'description', 'technologies', 'featuredImage', 'hasScrollableImage', 'dateTime', 'featured', 'slug'])
        .sort({ dateTime: -1, featured: 1 })
        .find()
})
const projects = computed(() => {
    if (props.enableFilter) {
        return currentFilter.value.toLowerCase() === 'all' ? data.value : data.value.filter(p => p.technologies.includes(currentFilter.value.toLowerCase()))
    } else {
        return data.value
    }
})

</script>
<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease-in-out;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: scale(0);
}
</style>
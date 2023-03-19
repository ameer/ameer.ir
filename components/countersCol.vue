<template>
    <v-col class="text-center" cols="4" md="4" v-for="(item, i) in counters" :key="`counter-col-${i}`">
        <div class="fa-num text-amber text-h5">+{{ item.number }}</div>
        <div class="text-body-2">{{ item.title }}</div>
    </v-col>
</template>
<script setup>
import { ref } from 'vue';
const { t } = useI18n({
    useScope: 'local'
})
const counters = ref([
    { title: t('Years’ experience'), number: 10 },
    { title: t('Completed Project'), number: 31 },
    { title: t('Customer Satisfaction'), number: 60 },
])
</script>
<style></style>
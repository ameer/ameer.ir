<template>
    <v-col class="text-center" cols="6" md="4" v-for="(item, i) in counters" :key="`counter-col-${i}`">
        <div class="text-amber text-h6">{{ item.number }} +</div>
        <div class="text-body-2">{{ item.title }}</div>
    </v-col>
</template>
<script setup>
import { ref } from 'vue';
const counters = ref([
    { title: 'سال تجربه', number: 10 },
    { title: 'پروژه تکمیل شده', number: 28 },
    { title: 'مورد رضایت مشتری', number: 60 },
])
</script>
<style>

</style>
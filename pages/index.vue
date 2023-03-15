<template>
    <v-layout :full-height="true">
        <v-container class="px-8 pt-16 overflow-hidden">
            <v-row :align="'stretch'">
                <v-col :cols="12">
                    <images-intro-card />
                </v-col>
                <counters-col />
                <projects-section />
            </v-row>
        </v-container>
    </v-layout>
</template>
<script setup>
useHead({
    title: 'خانه',
    meta: [
        { name: 'description', content: '' }
    ]
})
</script>
<style></style>
<template>
    <v-layout :full-height="true">
        <v-container class="px-8 pt-16 overflow-hidden">
            <v-row :align="'stretch'">
                <v-col :cols="12">
                    <images-intro-card />
                </v-col>
                <counters-col />
                <v-col class="mt-8" cols="12">
                    <h2>پروژه‌های من</h2>
                </v-col>
                <projects-section />
            </v-row>
        </v-container>
    </v-layout>
</template>
<script setup>

</script>
<style>

</style>
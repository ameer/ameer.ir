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
const { t } = useI18n({
    useScope: 'local'
})

</script>
<style></style>
<template>
    <v-layout :full-height="true">
        <v-container class="px-8 pt-16 overflow-hidden">
            <v-row :align="'stretch'">
                <v-col :cols="12">
                    <div class="intro-card"
                        :style="`--bg-image: url('/images/computer-2982270_1280.jpg');--bg-position: center center;`">
                        <div class="intro-card__overlay">
                            <img src="/ameer-mousavi.png" class="d-none d-lg-block profile-photo" />
                            <div class="intro-card__text">
                                <h1 class="text-h3 font-weight-bold ct-high-emphasis">
                                    دنیای زیبای کارهای من رو ببینید!
                                </h1>
                            </div>
                        </div>
                    </div>
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
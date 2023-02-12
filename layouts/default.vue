<template>
    <v-app>
        <v-container class="page-wrapper d-flex pa-0 position-relative">
            <v-img class="top-img" max-height="512" cover
                srcset="/images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg 596w,
                                                    /images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_970.jpg 970w,
                                                    /images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_1254.jpg 1254w,
                                                    /images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_1440.jpg 1440w"
                src="/images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_1440.jpg">
                <div class="image-gradient-fade-bottom"></div>
            </v-img>
            <side-nav />
            <v-main>
                <slot />
            </v-main>
        </v-container>
    </v-app>
</template>
<script setup>
import { ref } from 'vue'
const drawer = ref(null)
</script>
<style>
.page-wrapper {
    background: #1e1e28;
}

.v-main {
    padding-right: 290px !important;
}
</style>
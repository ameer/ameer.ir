<template>
    <ClientOnly>
        <v-app>
            <v-container class="page-wrapper d-flex pa-0 position-relative">
                <side-nav />
                <v-main>
                    <slot />
                </v-main>
            </v-container>
        </v-app>
    </ClientOnly>
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
<template>
    <v-app>
        <v-navigation-drawer v-model="drawer">
            <v-card height="256" elevation="0" class="text-center">
                <v-card-text>
                    <v-avatar :size="128" class="mb-4">
                        <v-img :src="'/ameer-mousavi.jpg'"></v-img>
                    </v-avatar>
                    <h1>امیر موسوی</h1>
                    <h2 class="text-medium-emphasis text-h6">
                        طراح و توسعه‌دهنده وب
                    </h2>
                    <v-btn>sada</v-btn>
                </v-card-text>
            </v-card>
        </v-navigation-drawer>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>
<script setup>
import { ref } from 'vue'
const drawer = ref(null)
</script>
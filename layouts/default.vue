<template>
    <v-app>

        <v-main>
            <v-container>
                <v-row no-gutters>
                    <v-col cols="auto">
                        <side-nav />
                    </v-col>
                    <v-col cols="8">
                        <slot />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<script setup>
import { ref } from 'vue'
const drawer = ref(null)
</script>
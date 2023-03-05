<template>
    <v-img class="top-img" max-height="512" cover :src="src">
        <div class="image-gradient-fade-bottom"></div>
    </v-img>
</template>
<script setup>
const props = defineProps({
    height: { type: [Number, String], default: 500 },
    src: {
        type: String,
        default: '/img/computer-cropped.jpg'
    }
})
</script>
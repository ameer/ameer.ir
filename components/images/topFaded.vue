<template>
    <v-img class="top-img" max-height="512" cover :lazy-src="$img(src, { width: 10, quality: 70 })"
        :src="$img(src, { height, quality: 70 })" :srcset="_srcset.srcset" :height="height" :sizes="_srcset.sizes">
        <div class="image-gradient-fade-bottom"></div>
    </v-img>
</template>
<script setup>
const props = defineProps({
    height: { type: [Number, String], default: 500 },
    src: {
        type: String,
        default: '/img/header-bg.jpg'
    }
})
const $img = useImage()
const _srcset = computed(() => {
    return $img.getSizes(props.src, {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
            format: 'webp',
            quality: 70,
            height: props.height
        }
    })
})
</script>
<style>

</style>
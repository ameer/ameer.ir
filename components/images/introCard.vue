<template>
    <div class="intro-card" :style="`--bg-image: ${backgroundImgURL};--bg-position: center center;`">

        <div class="intro-card__overlay">
            <nuxt-img :src="`/ameer-mousavi.png`" :quality="50" class="d-none d-lg-block profile-photo"></nuxt-img>
            <div class="intro-card__text">
                <h1 class="text-h3 font-weight-bold ct-high-emphasis">
                    {{ $t('See the beautiful world of my work!') }}
                </h1>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    height: { type: [Number, String], default: 256 },
    src: {
        type: String,
        default: '/img/computer-2982270_1280.jpg'
    }
})
const backgroundImgURL = computed(() => {

    return `url('${props.src}')`
})
</script>
<style>
.intro-card>.intro-card__image-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.intro-card>img {
    height: auto;
    width: 100%;
}
</style>
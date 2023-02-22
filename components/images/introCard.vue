<template>
    <div class="intro-card" :style="`--bg-image: ${backgroundStyles.backgroundImage};--bg-position: center center;`">
        <div class="intro-card__overlay">
            <img src="/ameer-mousavi.png" class="d-none d-lg-block profile-photo" />
            <div class="intro-card__text">
                <h1 class="text-h3 font-weight-bold ct-high-emphasis">
                    دنیای زیبای کارهای من رو ببینید!
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
        default: '/images/computer-2982270_1280.jpg'
    }
})
const $img = useImage()

const backgroundStyles = computed(() => {
    const imgUrl = $img(props.src, {}, {
        preset: 'introCard'
    })
    return {
        backgroundImage: `url('${imgUrl}')`
    }
})
</script>
<style>

</style>
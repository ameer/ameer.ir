<template>
    <div class="intro-card">
        <div class="intro-card__image-container">
            <nuxt-img :src="src" :modifiers="{ position: 'center' }" :quality="50" :height="250" fit="cover"
                width="1080"></nuxt-img>
        </div>
        <div class="intro-card__overlay">
            <nuxt-img :src="`/ameer-mousavi.png`" :quality="50" class="d-none d-lg-block profile-photo"></nuxt-img>
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
        default: '/img/computer-2982270_1280.jpg'
    }
})
const $img = useImage()

const backgroundStyles = computed(() => {
    const imgUrl = $img(props.src, {}, {
        preset: 'introCard',
    })
    return {
        backgroundImage: `url('${imgUrl}')`
    }
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
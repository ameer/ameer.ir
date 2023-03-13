<template>
    <ContentDoc v-slot="{ doc }">
        <v-layout :full-height="true">
            <v-container class="px-8 pt-16 overflow-hidden">
                <v-row :align="'stretch'" justify="center">
                    <v-col :cols="12">
                        <h1 class="text-h3 font-weight-bold ct-high-emphasis">
                            {{ doc.title }}
                        </h1>
                        <h3 class="text-h6 ct-disabled">
                            {{ doc.description }}
                        </h3>
                    </v-col>
                    <v-col cols="12">
                        <carousel :items-to-show="1.25" v-model="sliderModel" :dir="'rtl'">
                            <slide v-for="(slide, i) in doc.slides" :key="`${doc.slug}-slide-${i}`" :data-title="slide">
                                <nuxt-picture legacy-format="jpg" fit="fill" :modifiers="{ position: 'top' }" :height="350"
                                    sizes="sm:100vw lg:800px" :src="`/img/${doc.slug}${slide}.jpg`">
                                </nuxt-picture>
                            </slide>
                        </carousel>
                    </v-col>
                    <v-col v-if="doc.hasSlides" cols="12" sm="2" class="pt-0">
                        <v-btn :size="24" :variant="'text'" icon="mdi-chevron-right" @click="prev"
                            :disabled="sliderModel === 0"></v-btn>
                        <v-btn :size="24" :variant="'text'" icon="mdi-chevron-left" @click="next"
                            :disabled="sliderModel + 1 === doc.slides.length"></v-btn>

                    </v-col>
                    <v-col cols="12" sm="10" class="text-end pt-0">
                        <span v-for="(slide, i) in doc.slides" :key="`${doc.slug}-slide-nav-${i}`"
                            class="slide-pagination-bullet" tabindex="0" role="button" :aria-label="`Go to slide ${i + 1}`"
                            :class="{ 'bg-amber active': sliderModel === i }" @click="sliderModel = i">
                        </span>
                    </v-col>
                    <v-col cols="12" md="9">
                        <ContentRenderer :value="doc"
                            class="content-container text-body-1 ct-high-emphasis font-weight-light" />
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>
    </ContentDoc>
</template>
<script setup>
import { ref } from 'vue'
import { useLocale } from 'vuetify';
import '/assets/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
definePageMeta({
    layout: "default",
});
const sliderModel = ref(0)
const { isRtl } = useLocale()
const next = () => {
    sliderModel.value++
}
const prev = () => {
    sliderModel.value--
}
</script>
<style>
.featured-image img {
    object-position: top !important;
}

.content-container p {
    margin-bottom: 20px;
    line-height: 1.75rem;
}

.content-container a {
    text-decoration: none;
    font-weight: bold;
    color: #469be9;
    position: relative;
}

.content-container a::after {
    position: absolute;
    bottom: -3px;
    right: 0;
    width: 100%;
    height: 2px;
    content: "";
    background-color: currentcolor;
    transition: transform .25s ease-in-out;
    transform: scaleX(0);
}

.content-container a:hover::after {
    transform: scaleX(1);
}

li.carousel__slide.carousel__slide--visible {
    position: relative;
    overflow: hidden;
}

li.carousel__slide.carousel__slide--visible::after {
    position: absolute;
    content: attr(data-title);
    width: 100%;
    height: 64px;
    background: #191923;
    bottom: 0;
    right: 0;
    left: 0;
    transform: translateY(64px);
    transition: transform .3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

li.carousel__slide.carousel__slide--visible:hover::after {
    transform: translateY(0);
}

li.carousel__slide.carousel__slide--visible img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    pointer-events: none;
    /* transform: scale(.95);
    will-change: auto;
    transition: transform .3s ease-in-out;
    cursor: zoom-in; */
}
.content-container img {
    width: 100%;
    height: auto;
}
.content-container img:hover {
    transform: scale(1);
}
span.slide-pagination-bullet {
    width: 6px;
    display: inline-block;
    margin-right: 10px;
    background-color: #cacace;
    border-radius: 5px;
    opacity: .5;
    height: 4px;
    -webkit-transition: .4s ease-in-out;
    transition: .4s ease-in-out;
}

span.slide-pagination-bullet.active {
    width: 20px;
    opacity: 1;
}
</style>
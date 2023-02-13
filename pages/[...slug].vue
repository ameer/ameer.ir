<template>
    <ContentDoc v-slot="{ doc }">
        {{ doc }}
        <v-layout :full-height="true">
            <v-container class="px-8 pt-16 overflow-hidden">
                <v-row :align="'stretch'" justify="center">
                    <v-col :cols="12">
                        <div class="intro-card" :style="`--bg-image: url('${doc.featuredImage}');--bg-position: top`">
                            <div class="intro-card__overlay">
                                <div class="intro-card__text">
                                    <h1 class="text-h3 font-weight-bold ct-high-emphasis">
                                        {{ doc.title }}
                                    </h1>
                                    <h3 class="text-h6 ct-disabled">
                                        {{ doc.description }}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="9">
                        <div class="content-container text-body-1 ct-high-emphasis font-weight-light"
                            style="line-height: 3em;">
                            <ContentRenderer :value="doc" />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>
    </ContentDoc>

</template>
<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
    layout: "default",
});
</script>
<style>
.featured-image img {
    object-position: top !important;
}

.content-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transform: scale(.95);
    will-change: auto;
    transition: transform .3s ease-in-out;
    cursor: zoom-in;
}

.content-container img:hover {
    transform: scale(1);
}
</style>
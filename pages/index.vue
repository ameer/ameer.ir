<template>
    <v-layout :full-height="true">
        <v-container class="px-8 pt-16 overflow-hidden">
            <v-img class="top-img" max-height="512" cover
                srcset="/images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg 596w,
                                        /images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_970.jpg 970w,
                                        /images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_1254.jpg 1254w,
                                        /images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_1440.jpg 1440w"
                src="/images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_1440.jpg">
                <div class="image-gradient-fade-bottom"></div>
            </v-img>
            <v-row :align="'center'">
                <v-col :cols="12">
                    <div class="intro-card">
                        <div class="intro-card__overlay">
                            <img src="/ameer-mousavi.png" class="profile-photo" />
                            <div class="intro-card__text">
                                <h1 class="text-h3 font-weight-bold ct-high-emphasis">
                                    دنیای زیبای کارهای من رو ببینید!
                                </h1>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>
<script>
export default {

}
</script>
<style>
.top-img {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 360px !important;
}

.image-gradient-fade-bottom {
    position: relative;
    height: 100%;
    width: 100%;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(30, 30, 40, .93)), color-stop(70%, rgba(30, 30, 40, .96)), color-stop(80%, rgba(30, 30, 40, .99)), to(#1e1e28));
    background-image: linear-gradient(180deg, rgba(30, 30, 40, .93) 0, rgba(30, 30, 40, .96) 70%, rgba(30, 30, 40, .99) 80%, #1e1e28 100%);
}

.intro-card {
    background-image: url('/images/mountains-276995_f3x7ep_ar_16_9,c_fill,g_auto__c_scale,w_1440.jpg');
    transition: .55s ease-in-out;
    background-position: center;
    position: relative;
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    z-index: 99;
    margin-bottom: 30px;
}

.intro-card::before {
    content: '';
    position: absolute;
    z-index: 0;
    top: -30px;
    width: 90%;
    height: 30px;
    left: 5%;
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: rgba(30, 30, 40, .88);
}

.intro-card__overlay {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 60px;
    width: 100%;
    background-image: -webkit-gradient(linear, left top, right top, color-stop(15%, rgba(45, 45, 58, .9)), color-stop(50%, rgba(45, 45, 58, .7)), to(rgba(43, 43, 53, .7)));
    background-image: linear-gradient(90deg, rgba(45, 45, 58, .9) 15%, rgba(45, 45, 58, .7) 50%, rgba(43, 43, 53, .7) 100%);
}

.intro-card .profile-photo {
    width: 35% !important;
    height: auto !important;
    position: absolute !important;
    bottom: 0;
    left: 0;
}

.intro-card__text {
    width: 60% !important;
}
</style>
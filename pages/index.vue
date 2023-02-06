<template>
    <v-layout :full-height="true">
        <v-container>
            <v-row :align="'center'">
                <v-col :cols="12">

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
.header-banner {
    background-image: url('/yazd.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    width: 100%;
    height: 512px;
    position: relative;
}

.header-banner::before {
    border-radius: 10px;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(209, 207, 207, 0.6);
}

.header-banner .profile-picture {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 256px;
    height: auto;
}
</style>
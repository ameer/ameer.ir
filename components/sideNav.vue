<template>
    <aside class="side-nav" :class="{ 'active': active }">
        <div class="side-nav__header">
            <v-btn :ripple="false" :variant="'plain'" class="side-nav__btn" icon="mdi-dots-vertical"
                @click="active = !active"></v-btn>
        </div>
        <profile-card />
        <div class="info-skill-container">
            <basic-data-table />
            <div class="text-center px-4 mt-6 mb-4">
                <v-divider thickness="4"></v-divider>
            </div>
            <skill-container />
        </div>
        <social-bar />
    </aside>
</template>
<script setup>
import { ref } from 'vue'
const active = ref(false)
const props = defineProps({
    open: Boolean
})
useListen('closeSideNav', () => {
    active.value = false
})
</script>
<style>
.side-nav {
    position: fixed;
    width: 290px;
    min-width: 290px;
    height: calc(100vh - 30px);
    z-index: 1005;
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    -webkit-transition: .55s ease-in-out;
    transition: .55s ease-in-out;
    background-color: rgb(var(--v-theme-surface));
}

.side-nav__header {
    width: 100%;
    height: 64px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1006;
    display: none;
}

.side-nav__btn {
    margin-right: auto;
    pointer-events: all;
    font-size: 14px !important;
}

@media (max-width: 1032px) {
    .side-nav {
        position: fixed;
        right: -290px;
        width: 290px;
        height: 100vh;
    }

    .side-nav__overlay {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        background: rgba(30, 30, 40, .88);
        z-index: 999;
        pointer-events: none;
        opacity: 0;
        -webkit-transition: .55s ease-in-out;
        transition: .55s ease-in-out;
    }

    .side-nav.active {
        transform: translateX(-290px);
    }

    aside.side-nav.active+.side-nav__overlay {
        opacity: 1;
        pointer-events: all;
    }

    main.v-main {
        padding-right: 0 !important;
    }

    .side-nav__header {
        display: flex;
    }

    .side-nav__btn {
        -webkit-transform: translateX(-56px);
        transform: translateX(-56px);
        -webkit-transition: .4s ease-in-out;
        transition: .4s ease-in-out !important;
    }

    .side-nav.active .side-nav__btn {
        transform: translateX(0);
    }
}
</style>
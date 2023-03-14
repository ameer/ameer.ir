<template>
    <aside class="side-nav" :class="{ 'active': active }">
        <div class="side-nav__header">
            <v-btn :ripple="false" :variant="'plain'" class="side-nav__btn" icon="mdi-dots-vertical"
                @click="toggleSideNav"></v-btn>
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
const toggleSideNav = () => {
    active.value = !active.value
    if (active.value === true) { useEvent('sideNavIsOpen', 'side-nav-active') } else { useEvent('sideNavIsClosed') }
}
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
    left: 0;
    top: 0;
    z-index: 1006;
    display: none;
}

html[lang='rtl'] .side-nav__header {
    right: 0;
}

.side-nav__btn {
    margin-right: auto;
    pointer-events: all;
    font-size: 14px !important;
}

@media (max-width: 1264px) {
    .side-nav {
        position: fixed;
        right: -290px;
        width: 290px;
        height: 100vh;
    }

    .side-nav.active {
        transform: translateX(-290px);
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

    .page-wrapper.menu-bar-active .side-nav .side-nav__header .side-nav__btn {
        opacity: 0;
        pointer-events: none;
    }
}
</style>
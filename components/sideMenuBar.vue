<template>
    <aside class="side-menu-bar" :class="{ 'active': active }">
        <div class="side-menu-bar__inner">
            <div class="position-relative">
                <div class="side-menu-bar__header">
                    <a class="side-menu-bar__btn" @click="toggleMenuBar">
                        <span></span>
                    </a>
                </div>
                <div class="current-page">
                    خانه
                </div>
                <div class="scroll-frame">
                    <nav>
                        <ul class="main-menu">
                            <li v-for="(item, i) in menuItems" :key="`side-menu-item-${i}`" class="menu-item">
                                <NuxtLink class="ct-high-emphasis" :to="item.href">{{ item.title }}</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </aside>
</template>
<script setup>
import { ref } from 'vue'
const active = ref(false)
const menuItems = ref([
    { title: 'خانه', href: '/' },
    { title: 'پروژه‌ها', href: '/projects' }
])
const toggleMenuBar = () => {
    active.value = !active.value
    if (active.value === true) { useEvent('sideNavIsOpen', 'menu-bar-active') } else { useEvent('sideNavIsClosed') }
}
useListen('closeSideNav', () => {
    active.value = false
})
</script>
<style>
:root {
    --side-menu-bar-header-height: 70px;
}

.side-menu-bar {
    position: absolute;
    right: 0;
    width: 80px;
    height: calc(100vh - 30px);
    z-index: 1005;
}

.v-locale--is-rtl .side-menu-bar {
    left: 0 !important;
    right: auto !important;
}

.side-menu-bar .side-menu-bar__inner {
    position: fixed;
    top: auto;
    bottom: auto;
    left: auto;
    width: 80px;
    background: #20202a;
    height: calc(100vh - 30px);
    z-index: 999;
    -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, .2);
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, .2);
    -webkit-transition: .55s ease-in-out;
    transition: .55s ease-in-out;
}

.v-locale--is-ltr .side-menu-bar.active .side-menu-bar__inner {
    width: 230px;
    transform: translateX(-150px);
}

.v-locale--is-rtl .side-menu-bar.active .side-menu-bar__inner {
    width: 230px;
    transform: translateX(150px);
}

.side-menu-bar .side-menu-bar__header {
    width: 100%;
    height: var(--side-menu-bar-header-height);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9;
    -webkit-box-shadow: 0 1px 4px 0 rgba(15, 15, 20, .1);
    box-shadow: 0 1px 4px 0 rgba(15, 15, 20, .1);
    background: linear-gradient(159deg, rgba(37, 37, 50, .98) 0, rgba(35, 35, 45, .98) 100%);
}

.v-locale--is-rtl .side-menu-bar .side-menu-bar__header {
    left: 0;
    right: unset;
}

.side-menu-bar .side-menu-bar__inner .current-page {
    width: 200px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    color: #fafafc;
    position: absolute;
    overflow: hidden;
    top: 200px;
    opacity: 1;
    right: -62px;
    text-transform: uppercase;
    font-size: 14px;
    opacity: 1;
    font-weight: 500;
    -webkit-transition: .4s ease-in-out;
    transition: .4s ease-in-out;
}

.side-menu-bar.active .side-menu-bar__inner .current-page {
    opacity: 0;
}

.side-menu-bar .scroll-frame {
    width: 100%;
    height: calc(100vh - 30px);
    overflow: auto;
    scrollbar-width: none !important;
    -webkit-overflow-scrolling: touch;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
}

.side-menu-bar .scroll-frame::-webkit-scrollbar {
    width: 0;
}

.side-menu-bar .side-menu-bar__header .side-menu-bar__btn {
    margin-top: -10px;
    display: block;
    width: 15px;
    height: 12px;
    padding: 30px;
    transition: .55s ease-in-out;
}

.side-menu-bar__btn span,
.side-menu-bar__btn span:after,
.side-menu-bar__btn span:before {
    content: "";
    display: block;
    width: 15px;
    height: 1px;
    border-radius: 1px;
    background: #cacace;
    -webkit-transition: .4s ease-in-out;
    transition: .4s ease-in-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.side-menu-bar.active .side-menu-bar__btn span {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.side-menu-bar.active .side-menu-bar__btn span:before {
    -webkit-transform: translate(0px, 5px) rotate(-90deg);
    transform: translate(0px, 5px) rotate(-90deg)
}

.side-menu-bar.active .side-menu-bar__btn span:after {
    -webkit-transform: translate(0px, -5px) rotate(-90deg);
    transform: translate(0px, -5px) rotate(-90deg)
}

.side-menu-bar__btn span {
    position: relative;
    margin: 5px 0 0 0;
}

.side-menu-bar__btn span:after,
.side-menu-bar__btn span:before {
    position: absolute;
}

.side-menu-bar__btn span::before {
    top: -5px;
}

.side-menu-bar__btn span::after {
    top: 5px;
}

.side-menu-bar nav {
    display: flex;
    height: 100%;
    position: relative
}

.side-menu-bar nav .main-menu {
    width: 100%;
    padding: 0;
    margin: calc(var(--side-menu-bar-header-height) + 16px) 0 0px;
    min-width: 230px;
}

.side-menu-bar nav .main-menu .menu-item {
    width: 100%;
    list-style-type: none;
    -webkit-transition: .55s ease-in-out;
    transition: .55s ease-in-out;
    opacity: 0;
    -webkit-transform: translateX(-60px);
    transform: translateX(-60px);
    transition: .55s ease-in-out;
    text-align: center;
}

.side-menu-bar nav .main-menu .menu-item a {
    padding: 7px 30px;
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;
    position: relative;
}

.side-menu-bar nav .main-menu .menu-item a::after {
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

.side-menu-bar nav .main-menu .menu-item a:hover::after {
    transform: scaleX(1);
}

.side-menu-bar.active nav .main-menu .menu-item {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}

.side-menu-bar nav .main-menu .menu-item:nth-child(1) {
    -webkit-transition-delay: .05s;
    transition-delay: .05s
}

.side-menu-bar nav .main-menu .menu-item:nth-child(2) {
    -webkit-transition-delay: .1s;
    transition-delay: .1s
}

.side-menu-bar nav .main-menu .menu-item:nth-child(3) {
    -webkit-transition-delay: .15s;
    transition-delay: .15s
}

.side-menu-bar nav .main-menu .menu-item:nth-child(4) {
    -webkit-transition-delay: .2s;
    transition-delay: .2s
}

.side-menu-bar nav .main-menu .menu-item:nth-child(5) {
    -webkit-transition-delay: .25s;
    transition-delay: .25s
}

.side-menu-bar nav .main-menu .menu-item:nth-child(6) {
    -webkit-transition-delay: .3s;
    transition-delay: .3s
}

.side-menu-bar nav .main-menu .menu-item:nth-child(7) {
    -webkit-transition-delay: .35s;
    transition-delay: .35s
}

.side-menu-bar nav .main-menu .menu-item:nth-child(8) {
    -webkit-transition-delay: .4s;
    transition-delay: .4s
}

.side-menu-bar nav .main-menu .menu-item:nth-child(9) {
    -webkit-transition-delay: .45s;
    transition-delay: .45s
}

.side-menu-bar nav .main-menu .menu-item:nth-child(10) {
    -webkit-transition-delay: .5s;
    transition-delay: .5s
}

.v-locale--is-ltr .side-menu-bar+main.v-main {
    padding-right: 80px !important;
}

.v-locale--is-rtl .side-menu-bar+main.v-main {
    padding-left: 80px !important;
}

.v-locale--is-ltr .side-menu-bar.active+main.v-main {
    transform: translateX(-150px);
}

.v-locale--is-rtl .side-menu-bar.active+main.v-main {
    transform: translateX(150px);
}

@media (max-width: 1264px) {
    .v-locale--is-ltr .side-menu-bar {
        right: -80px;
    }

    .v-locale--is-rtl .side-menu-bar {
        left: -80px;
    }

    .v-locale--is-ltr .side-menu-bar .side-menu-bar__header .side-menu-bar__btn {
        transform: translateX(-80px);
    }

    .v-locale--is-rtl .side-menu-bar .side-menu-bar__header .side-menu-bar__btn {
        transform: translateX(80px);
    }

    .side-menu-bar.active .side-menu-bar__header .side-menu-bar__btn {
        transform: translateX(0);
    }

    .v-locale--is-ltr .side-menu-bar.active .side-menu-bar__inner {
        transform: translateX(-230px);
    }

    .v-locale--is-rtl .side-menu-bar.active .side-menu-bar__inner {
        transform: translateX(230px);
    }

    .side-menu-bar,
    .side-menu-bar .side-menu-bar__inner {
        height: 100vh;
    }

    .page-wrapper.side-nav-active .side-menu-bar .side-menu-bar__header .side-menu-bar__btn {
        opacity: 0;
        pointer-events: none;
    }

    .v-locale--is-ltr .side-menu-bar+main.v-main {
        padding-right: 0 !important;
    }

    .v-locale--is-rtl .side-menu-bar+main.v-main {
        padding-left: 0 !important;
    }

    .side-menu-bar.active+main.v-main {
        transform: translateX(0);
    }
}
</style>
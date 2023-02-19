<template>
    <aside class="side-menu-bar" :class="{ 'active': active }">
        <div class="side-menu-bar__inner">
            <div class="position-relative">
                <div class="side-menu-bar__header">
                    <a class="side-menu-bar__btn" @click="active = !active">
                        <span></span>
                    </a>
                </div>
                <div class="current-page">
                    خانه
                </div>
                <div class="scroll-frame">
                    <nav>
                        <ul class="main-menu">
                            <li id="menu-item-194"
                                class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-214 current_page_item">
                                <a href="https://arter.bslthemes.com/">Home</a>
                            </li>
                            <li id="menu-item-205"
                                class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                <a data-no-swup="">Portfolio</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-202"
                                        class=" menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="https://arter.bslthemes.com/portfolio-2-column/">Portfolio (2
                                            Column)</a></li>
                                    <li id="menu-item-204"
                                        class=" menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="https://arter.bslthemes.com/portfolio-3-column/">Portfolio (3
                                            Column)</a></li>
                                    <li id="menu-item-201"
                                        class=" menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="https://arter.bslthemes.com/portfolio-gallery/">Portfolio
                                            (Gallery)</a></li>
                                    <li id="menu-item-203"
                                        class=" menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="https://arter.bslthemes.com/portfolio/">Portfolio (Masonry)</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-199" class=" menu-item menu-item-type-post_type menu-item-object-page"><a
                                    href="https://arter.bslthemes.com/history/">History</a></li>
                            <li id="menu-item-206"
                                class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                <a data-no-swup="">Blog</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-195"
                                        class=" menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="https://arter.bslthemes.com/blog/">Blog</a></li>
                                    <li id="menu-item-196"
                                        class=" menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="https://arter.bslthemes.com/blog-3-column/">Blog (3 Column)</a></li>
                                    <li id="menu-item-197"
                                        class=" menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="https://arter.bslthemes.com/blog-carousel/">Blog (Carousel)</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-198" class=" menu-item menu-item-type-post_type menu-item-object-page"><a
                                    href="https://arter.bslthemes.com/contact/">Contact</a></li>
                            <li id="menu-item-243"
                                class="data-no-swup main-nav-custom-border-top menu-item menu-item-type-custom menu-item-object-custom">
                                <a target="_blank" href="/onepage/" data-no-swup="">One Page Version</a>
                            </li>
                            <li id="menu-item-244"
                                class="data-no-swup menu-item menu-item-type-custom menu-item-object-custom"><a
                                    target="_blank" href="/light/" data-no-swup="">Light Version</a></li>
                        </ul> <!-- menu list end -->
                    </nav>
                </div>
            </div>
        </div>
    </aside>
</template>
<script setup>
import { ref } from 'vue'
const active = ref(false)
</script>
<style>
.side-menu-bar {
    position: absolute;
    left: 0;
    width: 80px;
    height: calc(100vh - 30px);
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

.side-menu-bar.active .side-menu-bar__inner {
    width: 230px;
    transform: translateX(150px);
}

.side-menu-bar .side-menu-bar__header {
    width: 100%;
    height: 70px;
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
    left: 0;
    z-index: 9;
    -webkit-box-shadow: 0 1px 4px 0 rgba(15, 15, 20, .1);
    box-shadow: 0 1px 4px 0 rgba(15, 15, 20, .1);
    background: linear-gradient(159deg, rgba(37, 37, 50, .98) 0, rgba(35, 35, 45, .98) 100%);
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    position: relative
}

.side-menu-bar nav .main-menu {
    width: 100%;
    padding: 0;
    margin: 60px 0 0px;
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
    transition: .55s ease-in-out
}

.side-menu-bar nav .main-menu .menu-item a {
    padding: 7px 30px;
    font-weight: 400;
    font-size: 12px;
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
</style>
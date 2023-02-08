<template>
    <aside class="side-nav">
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
const props = defineProps({
    open: Boolean
})
</script>
<style>
.side-nav {
    position: fixed;
    width: 290px;
    min-width: 290px;
    height: calc(100vh - 30px);
    position: relative;
    z-index: 999;
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    -webkit-transition: .55s ease-in-out;
    transition: .55s ease-in-out;
    background-color: rgb(var(--v-theme-surface));
}
</style>
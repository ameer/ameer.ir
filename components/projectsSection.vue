<template>
    <v-col cols="12" sm="6" md="4" xxl="3" v-for="(project, i) in projects" :key="`project-col-${i}`" class="">
        <ProjectCard :project="project" />
    </v-col>
</template>
<script setup>
import { ref } from 'vue';
const projects = ref([
    {
        featuredImage: '/projects/pluto-landing.jpg',
        title: 'پلوتو',
        desc: 'سامانه هوشمند مدیریت ریسک و دارایی',
        technologies: ['vuejs', 'nuxt', 'vuetify']
    },
    {
        featuredImage: '/projects/spout-landing.jpg',
        title: 'اسپات',
        desc: 'سامانه بازارگردانی هوشمند الگوریتمی',
        technologies: ['vuejs', 'nuxt', 'vuetify']
    },
    {
        featuredImage: '/projects/tardi-landing.jpg',
        title: 'Tardigrade',
        desc: 'کیف پول سازمانی بر پایه بلاک‌چین',
        technologies: ['vuejs', 'nuxt', 'vuetify']
    },
    {
        featuredImage: '/projects/arnika-landing.jpg',
        title: 'آرنیکا',
        desc: 'وبسایت شرکت مهندسین مشاور آرنیکا طرح',
        technologies: ['vuejs', 'nuxt', 'vuetify']
    },
    {
        featuredImage: '/projects/phoner-i8t-landing.jpg',
        title: 'فروش اقساطی فونر',
        desc: 'لندینگ فروش اقساطی فروشگاه فونر',
        technologies: ['vuejs', 'vuetify', 'language-javascript'],
        href: 'https://phoner.ir/installment-purchase/'
    },
    {
        featuredImage: '/projects/phoner-landing.jpg',
        title: 'فروشگاه فونر',
        desc: 'وبسایت فروشگاهی فونر',
        technologies: ['wordpress', 'language-css3', 'language-javascript'],
        href: 'https://phoner.ir'
    },
    {
        featuredImage: '/projects/ims-landing.jpg',
        title: 'انجمن ریاضی ایران',
        desc: 'وبلاگ و وبسایت انجمن ریاضی ایران',
        technologies: ['wordpress', 'language-css3', 'language-javascript'],
        href: 'https://fa.ims.ir'
    },
    {
        featuredImage: '/projects/soltani-1-landing.jpg',
        title: 'دبیرستان سلطانی یک',
        desc: 'وبسایت رسمی دبیرستان استعدادهای درخشان شهید سلطانی یک کرج',
        technologies: ['wordpress', 'language-css3', 'language-javascript'],
        href: 'http://web.archive.org/web/20161008200250/http://soltani1.ir/'
    },
    {
        featuredImage: '/projects/mediseh-landing.jpg',
        title: 'گروه طراحی مدیسه',
        desc: 'وبسایت گروه طراحی داخلی مدیسه',
        technologies: ['wordpress', 'language-css3', 'language-javascript'],
        href: 'http://web.archive.org/web/20181103031216/http://medisehdesign.com/'
    },
    {
        featuredImage: '/projects/notifcaster-landing.jpg',
        title: 'Notifcaster',
        desc: 'سرویسی برای اتصال ربات تلگرام به وبسایت',
        technologies: ['nodejs', 'language-css3', 'mongo'],
        href: 'http://web.archive.org/web/20160623211324/http://notifcaster.com/'
    },
    {
        featuredImage: '/projects/twp-landing.jpg',
        title: 'تلگرام برای وردپرس',
        desc: 'پلاگین اتصال وردپرس به ربات تلگرام',
        technologies: ['nodejs', 'language-css3', 'mongo'],
        href: 'https://wordpress.org/plugins/telegram-for-wp/'
    },
    {
        featuredImage: '/projects/avaerc-landing.jpg',
        title: 'مرکز آموزش و توان‌بخشی آوا',
        desc: 'وبسایت مرکز آموزش و توان‌بخشی کودکان آوا',
        technologies: ['wordpress', 'language-css3', 'language-javascript'],
        href: 'http://web.archive.org/web/20150812003805/http://avaerc.ir/'
    },
    {
        featuredImage: '/projects/society-khu-landing.jpg',
        title: 'همایش جامعه و تعلیم و تربیت',
        desc: 'وبسایت نخستین همایش جامعه و تعلیم و تربیت دانشگاه خوارزمی',
        technologies: ['drupal', 'language-css3', 'language-php'],
        href: 'http://web.archive.org/web/20150624084806/http://society.khu.ac.ir/'
    },
    {
        featuredImage: '/projects/khu-bio-landing.jpg',
        title: 'کنگره بین‌المللی زیست‌شناسی ایران',
        desc: 'وبسایت رسمی کنگره ملی و بین‌المللی دانشگاه خوارزمی',
        technologies: ['wordpress', 'language-css3', 'language-javascript'],
        href: 'http://web.archive.org/web/20150216043744/http://khu-bio.ir/'
    },
    {
        featuredImage: '/projects/moshaver-konkur-landing.jpg',
        title: 'مشاور کنکور',
        desc: 'وبسایت مشاوره تخصصی کنکور و انتخاب رشته',
        technologies: ['wordpress', 'language-css3', 'language-javascript'],
        href: 'http://web.archive.org/web/20140225045454/http://moshaver-konkur.ir/'
    },
])
</script>
<style>

</style>
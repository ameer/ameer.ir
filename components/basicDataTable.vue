<template>
    <v-table density="compact" class="table-border-0">
        <tbody>
            <tr v-for="(item, i) in basicData" :key="`personal-data-item-${i}`" :title="item.title">
                <td class="text-start">
                    <v-icon :icon="`mdi-${item.icon}`" size="18" class="ct-medium-emphasis font-weight-light"></v-icon>
                </td>
                <td class="ct-high-emphasis text-end text-body-2">{{ item.value }}</td>
            </tr>
        </tbody>
    </v-table>
</template>
<script setup>
import { ref } from 'vue'
const basicData = ref([
    { title: 'سن و سال', value: Intl.NumberFormat('fa-IR').format(Math.floor((new Date() - new Date('1995-01-19')) / (1000 * 60 * 60 * 24 * 365))) + ' سال', icon: 'calendar-today' },
    { title: 'مدرک تحصیلی', value: 'کارشناسی', icon: 'certificate' },
    { title: 'وضعیت نظام وظیفه', value: 'پایان خدمت', icon: 'police-badge' },
    { title: 'محل سکونت', value: 'ایران، تهران', icon: 'home' },
])
</script>

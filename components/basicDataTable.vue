<template>
    <v-table density="compact" class="table-border-0">
        <tbody>
            <tr v-for="(item, i) in basicData" :key="`personal-data-item-${i}`" :title="$t(item.title)">
                <td class="text-start">
                    <v-icon :icon="`mdi-${item.icon}`" size="18" class="ct-medium-emphasis font-weight-light"></v-icon>
                </td>
                <td class="ct-high-emphasis text-end text-body-2" :class="item.class">{{ $t(item.value) }}</td>
            </tr>
        </tbody>
    </v-table>
</template>
<script setup>
import { ref } from 'vue'
const { t } = useI18n({
    useScope: 'local'
})
const basicData = ref([
    { title: 'Age', value: `${Math.floor((new Date() - new Date('1995-01-19')) / (1000 * 60 * 60 * 24 * 365))}  ${t('years')}`, icon: 'calendar-today', class: 'fa-num' },
    { title: 'Academic degree', value: 'Bachelor', icon: 'certificate' },
    { title: 'Military Services', value: 'End of Service', icon: 'police-badge' },
    { title: 'Location', value: 'Tehran, Iran', icon: 'home' },
])
</script>

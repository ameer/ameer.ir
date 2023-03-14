<template>
    <v-card elevation="0" class="profile-card text-center rounded-0" color="#23232d">
        <v-card-text>
            <v-avatar :size="90" class="mb-4">
                <v-img :src="'/ameer-mousavi.jpg'"></v-img>
            </v-avatar>
            <h1 class="mb-2">{{ $t('Ameer Mousavi') }}</h1>
            <h2 class="ct-medium-emphasis text-body-1">
                {{ $t('Web Designer and Developer') }}
            </h2>
        </v-card-text>
    </v-card>
</template>
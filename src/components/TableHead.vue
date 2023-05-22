<template>
    <thead>
        <th v-for="(columna, index) in columnas" :key="index">
            {{ columna.header }}
        </th>
    </thead>
</template>

<script lang="ts" setup>
import ITitles from '../interfaces/ITitles'
import { Ref } from 'vue'
const columnas: Ref<Array<ITitles>> = [
    { header: 'id', key: 'id' },
    { header: 'title', key: 'title' },
    { header: 'price', key: 'price' },
    { header: 'category', key: 'category' },
    { header: 'description', key: 'description' },
    { header: 'image', key: 'image' },
    { header: 'rate', key: 'rate' },
    { header: 'count', key: 'count' },
]

</script>

<style scope></style>
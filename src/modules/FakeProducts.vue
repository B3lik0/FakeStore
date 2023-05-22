<template>
    <div>
        <TableLayout :content="datos" />
    </div>
</template>

<script lang="ts" setup>
import useFakeStore from '../stores/useFakeStore'
import TableLayout from '../layout/TableLayout.vue'

import { onMounted, ref, Ref } from 'vue';
import IResponse from '../interfaces/IResponse';
const datos: Ref<Array<IResponse>> = ref([])
const store = useFakeStore()
onMounted(async () => {
    await store.fetchData()
    datos.value = store.data
})
</script>

<style scope></style>
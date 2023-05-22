<template>
    <tbody>
        <th>{{ props.content.id }}</th>
        <th>{{ props.content.title }}</th>
        <th>{{ props.content.price }}</th>
        <th>{{ props.content.category }}</th>
        <th>{{ props.content.description }}</th>
        <th :src="`url(${props.content.image})`"> </th>
        <th>{{ props.content.rating.rate }}</th>
        <th>{{ props.content.rating.count }}</th>
    </tbody>
</template>

<script lang="ts" setup>
const props = defineProps(['content'])
</script>

<style scope></style>
<template>
    <div>
        <table>
            <tbody>
                <TableHead />
                <TableRow v-for="item in props.content" :key="item.name" :content="item" />
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
import TableRow from '../components/TableRow.vue';
import TableHead from '../components/TableHead.vue';
const props = defineProps(['content'])
</script>

<style scope>
table {
    margin-top: 20px;
    padding: 10px;
}
</style>
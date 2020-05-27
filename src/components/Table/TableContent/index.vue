<template>
    <section class="tablecontentbox">
        <el-table :data="tableData" row-key="id" border>
            <el-table-column
                v-for="(item, key) in tableConfig"
                v-bind="item"
                :key="key"
                :sortable="item.sortable"
            />
            <slot />
        </el-table>
    </section>
</template>

<script>
export default {
    name: "TableContent",
    props: {
        tableData: {
            type: Array,
            default: () => []
        },
        tableConfig: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
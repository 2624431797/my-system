<template>
    <section class="rolebox">
        <div class="roling">
            <h3 class="box-title" slot="header" style="width: 100%;">
                <el-button type="primary" icon="plus">新增</el-button>
                <el-button type="danger" icon="delete">删除</el-button>
            </h3>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .roling{
        width: 100%;
        padding: 20px;
        border: 1px solid #d3dce6;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    }
</style>
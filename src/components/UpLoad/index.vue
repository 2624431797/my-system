<template>
    <section class="upload-content">
        <el-tabs 
            v-model="activeName" 
            @tab-click="handlerClickTab"
        >
            <el-tab-pane 
                label="用户管理" 
                name="first"
            >用户管理</el-tab-pane>
        </el-tabs>
    </section>
</template>

<script>
export default {
    name: "UpLoad",
    props: {
        activeName: {
            type: String,
            default: ""
        },
        tabMapOptions: {
            type: Array,
            default: () => []
        },
    },
    data(){
        return{

        }
    },
    methods: {
        //点击tab
        handlerClickTab(tab, event) {
            console.log(tab, event)
        },

    }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <section class="upload-content">
        <el-tabs 
            v-model="initActiveName" 
            @tab-click="handlerClickTab"
        >
            <el-tab-pane 
                v-for="item in tabMapOptions"
                :key="item.key"
                :label="item.label" 
                :name="item.key"
            >
                <el-upload
                    ref="uploadRef"
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    drag
                    multiple
                    :limit="limit"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :on-success="handlerSuccess"
                    :before-remove="beforeRemove"
                    :on-exceed="handleExceed"
                    :file-list="fileData.LegalFile.fileList"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Drop excel file here or <em>Browse</em></div>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-tab-pane>
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
        limit: {
            type: Number,
            default: 3
        },
        fileData: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{
            initActiveName: ""
        }
    },
    methods: {
        handlerInitActiveName(){
            this.initActiveName = this.activeName
        },
        //点击tab
        handlerClickTab(tab, event) {
            
        },
        handlerSuccess(){
            console.log("000")
            this.$message({
                message: "上传成功",
                type: 'success'
            })
        },
        handleRemove(file, fileList) {
            console.log(file, fileList)
        },
        handlePreview(file) {
            console.log(file)
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`)
        }
    },
    created(){
        this.handlerInitActiveName()
    }
}
</script>

<style lang="scss">
    .upload-content{
        width: 600px;
        height: 400px;
        padding: 20px;
        margin: 0 auto;
        background: #fff;
        border: 1px solid #DCDFE6;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
        .upload-demo{
            width: 600px;
            height: 300px;
            .el-upload{
                width: 600px;
                margin: 20px auto;
                .el-upload-dragger{
                    width: 400px;
                    margin: 0 auto;
                }
            }
        }
    }
</style>
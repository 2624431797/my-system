<template>
    <section class="tablebox">
        <div class="table-container">
            <!-- 过滤条件 -->
            <div class="filterbtn-container">
                <FilterBtn :form-option="searchFormOption" @search="handleFilter" />
            </div>
            <!-- 过滤条件 -->
            <!-- 表格 -->
            <div class="tablebox-container">
                <TableContent
                    :loading="listLoading" 
                    :table-data="tableData" 
                    :table-config="tableConfig"
                >
                    <el-table-column 
                        label="操作" 
                        align="center" 
                        class-name="small-padding fixed-width"
                    >
                        <template slot-scope="{row}">
                            <el-button size="mini" type="primary"  @click="handleView(row)">查看</el-button>
                            <el-button size="mini" type="success" @click="handleEdit(row)">修改</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(row)">删除</el-button>
                        </template>
                    </el-table-column>
                </TableContent>
            </div>
            <!-- 表格 -->
            <!-- 弹出框 -->
            <div class="BaseForm-container">
                <BaseForm 
                    ref="BaseForm"
                    :form-option="formOption"
                    :is-reset-form-flag="isResetFormFlag"
                    :parent-instance="this"
                    @updateData="updateData"
                    @createData="createData"
                />
            </div>
            <!-- 弹出框 -->
        </div>
    </section>
</template>

<script>
import userApp from "./tableData"
import FilterBtn from "@/components/Table/FilterBtn"
import TableContent from "@/components/Table/TableContent"
import BaseForm from "@/components/Table/BaseForm"

export default {
    data(){
        return {
            listLoading: false,
            formShow: false,
            isResetFormFlag: false,
            formOption: null,
            tableData: null,
            tableConfig: null,
            searchFormOption: null,
            defaultProps: null,
            data: null
        }
    },
    components: {
        FilterBtn,
        TableContent,
        BaseForm
    },
    methods: {
        handlerInitGetData(){
            ["formOption", "tableData", "tableConfig", "searchFormOption", "defaultProps", "data"].forEach(key => {
                if(key in userApp){
                    this[key] = userApp[key]
                }
            })
        },
        // 查询函数
        handleFilter(listQuery) {
            console.log(listQuery)
        },
        // 新增用户
        handleCreate() {
            const title = "新增用户"
            const operationStatus = "create"
            this.formAction(title, operationStatus)
        },
        // 查看用户信息
        handleView(row) {
            const title = "查看用户"
            const operationStatus = "view"
            this.formAction(title, operationStatus, row)
        },
        // 编辑用户信息
        handleEdit(row) {
            const title = "修改用户"
            const operationStatus = "edit"
            this.formAction(title, operationStatus, row)
        },
        // 删除用户信息
        handleDelete() {
            this.$confirm("确认删除, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                this.$message({
                    type: "success",
                    message: "删除成功!"
                })
            }).catch(() => {
                this.$message({
                    type: "info",
                    message: "已取消删除"
                })
            })
        },
        // 表单操作
        formAction(title, operationStatus, data) {
            this.formOption.title = title
            this.formOption.operationStatus = operationStatus
            this.formOption.data = data
            this.isResetFormFlag = !this.isResetFormFlag
            this.$refs.BaseForm.show()
        },
        // 更新数据
        updateData(data) {
            console.log(data)
        },
        // 新增数据
        createData(data) {
            console.log(data)
        }
    },
    created(){
        this.handlerInitGetData()
        console.log(this.formOption)
    }
}
</script>

<style lang="scss">
    .tablebox{
        width: 100%;
        background: #f0f2f5;
    }
</style>
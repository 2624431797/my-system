<template>
    <section class="settingbox">
        <div class="set-header">
            <h3 class="box-title" slot="header" style="width: 100%;">
                <el-row style="width: 100%;">
                    <el-col :span="12">
                        <router-link :to="{ path: 'setuseradd'}">
                            <el-button type="primary" icon="plus">新增</el-button>
                        </router-link>
                    </el-col>
                    <el-col :span="12">
                        <div class="el-input" style="width: 300px; float: right;">
                            <i class="el-input__icon el-icon-search"></i>
                            <input 
                                type="text" 
                                placeholder="输入用户名称" 
                                v-model="searchKey"
                                class="el-input__inner">
                        </div>
                    </el-col>
                </el-row>
            </h3>
        </div>
        <div class="set-container">
            <el-table
                :data="tableData.rows"
                border
                style="width: 100%"
                v-loading="loading"
            >
                <el-table-column
                    prop="id"
                    type="selection"
                    width="50"
                >
                </el-table-column>
                    <el-table-column
                        label="照片" width="76">
                        <template slot-scope="scope">
                            <img 
                                :src="scope.row.img" 
                                style="height: 35px;vertical-align: middle;" 
                            >
                        </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="名称"
                >
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <p>时间: {{ scope.row.nowTime }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="id"
                    label="登录用户名"
                ></el-table-column>
                <el-table-column
                    prop="title"
                    label="登录用户名"
                ></el-table-column>
                <el-table-column
                    prop="phone"
                    label="手机"
                ></el-table-column>
                <el-table-column
                    prop="email"
                    label="邮箱"
                ></el-table-column>
                <el-table-column
                    prop="createTime"
                    label="创建时间"
                ></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        {{ scope.row.status === 1 ? '已激活' : '未激活' }}
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="285">
                    <template slot-scope="scope">
                        <el-button
                            size="small"
                            type="default"
                            icon="edit"
                        >编辑</el-button>
                        <el-button
                            size="small"
                            type="info"
                            icon="setting"
                        >配置角色</el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                layout="total, prev, pager, next, jumper"
                :total="tableData.pagination.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            >
            </el-pagination>
        </div>
    </section>
</template>

<script>
import moment from 'moment'
import { getSetUserList, delectUserList } from "@/mock/mock"

export default {
    data(){
        return {
            currentRow: {},
            dialogVisible: false,
            dialogLoading: false,
            defaultProps: {
                children: 'children',
                label: 'name',
                id: "id",
            },
            roleTree: [],
            loading: false,
            searchKey: '',
            tableData: {
                pagination: {
                    total: 0,
                    pageNo: 1,
                    pageSize: 10,
                    parentId: 0
                },
                rows: [],
            },
        }
    },
    methods : {
        getData(){
            this.loading = true
            getSetUserList().then(res => {
                setTimeout(() => {
                    this.tableData.rows = res.userlist
                    this.tableData.pagination.total = res.total

                    this.loading = false
                }, 2000);
            })
        },
        handleSizeChange(val) {
            this.tableData.pagination.pageSize = val;
            this.getData();
        },
        handleCurrentChange(val) {
            this.tableData.pagination.pageNo = val;
            this.getData();
        },
        handleDelete(index, row) {         
            this.$confirm("确认删除该记录吗?", "提示", {
					type: 'warning'
				}).then(() => {
                    let para = {id: row.id}
                    console.log(para)
					delectUserList(para).then(res => {
                        console.log(res)
                        this.$message({
							message: res.msg,
							type: 'success'
						})
                    })
				}).catch((msg) => {
                    console.log(msg)
			})
        },
    },
    created(){
        this.getData()
    }
}
</script>

<style lang="scss">
    .settingbox{
        padding: 20px;
        border: 1px solid #d3dce6;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        .set-header{
            margin-bottom: 20px;
            .el-row{
                .el-col{
                    .el-input{
                        position: relative;
                        i{
                            position: absolute;
                            right: 10px;
                            color: #333;
                        }
                    }
                }
            }
        }
        .set-container{
            width: 100%;
            .el-pagination{
                margin-top: 20px;
                margin-left: 30px;
            }
        }
    }
        .el-popover{
            padding: 20px 60px;
            line-height: 26px;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.3);
        }
</style>
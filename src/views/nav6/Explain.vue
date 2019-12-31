<template>
    <section class="explainbox">
        
        <div class="ex-container">
            <h3>· 建议留言</h3>
            <!-- 添加框开始 -->
            <el-form class="outer">
                <el-form-item class='text'>
                    <el-input v-model="mayiForm.code" placeholder="请留下你的留言吧~"></el-input>
                </el-form-item>
                <el-form-item class='btn'>
                    <el-button 
                        type="primary"
                        @click="add"
                    >添加</el-button>
                </el-form-item>
            </el-form>
            <!-- 添加框结束 -->
            <!-- 表单框开始 -->
            <el-button 
                class="freshbtn" 
                style="width:100%;" 
                type="warning"
                @click="freshLoad"
            >刷 新</el-button>
            <el-table 
                border 
                style="width: 100%" 
                class="table-container"
                v-if="isRouterAlive"
                v-loading="loading"
                :data="tableData"
            >
                <el-table-column prop="city" label="城市" min-width="25"></el-table-column>
                <el-table-column prop="code" label="建议留言">
                    <template slot-scope="scope">
                        <span class="copytext">{{  }}</span>
                        <span> {{  }}</span>
                    </template>
                </el-table-column>
                <el-table-column 
                    prop="updatetime" 
                    label="时间" 
                    min-width="25"
                >
                    <span>{{  }}</span>
                </el-table-column>
                <el-table-column label="操作" fixed="right" min-width="28">
                    <template slot-scope="scope">
                        <div>
                            <el-button 
                                id='copy_btn' 
                                data-clipboard-action="copy" 
                                size="mini" 
                            >复制</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 表单框结束 -->
        </div>
        <div class="ex-footer">
            Copyright &copy; 2019-2020 &ensp;<a href="https://github.com/2624431797/my-system.git">Lanux</a>&ensp;. All rights reserved.
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            isRouterAlive : true,
            loading : false,
            mayiForm : {
                code: ""
            },
            tableData : [
                {
                    id: "1",
                    createtime: "2016-05-02",
                    city: "青岛",
                    code: "小蛋白",
                    ip: ""
                },
                {
                    id: "2",
                    createtime: "2016-05-04",
                    city: "北京",
                    code: "哈哈哈哈",
                    ip: ""
                }
            ]
        }
    },
    methods : {
        add(){
            if(this.mayiForm.code == ""){
                this.$message({
                    type: "error",
                    message: "留言不能为空"
                })
                return;
            } 
            else{
                console.log(this.mayiForm.code)
            }
        },
        freshLoad(){
            this.isRouterAlive = false
            this.loading = true
            setTimeout(() => {
                this.$nextTick(() => {
                    this.isRouterAlive = true
                    this.loading = false
                })
            }, 1000);
        },
    }
}
</script>

<style lang="scss">
    .explainbox{
        .ex-container{
            width: 100%;
            margin-top: 16px;
            h3{
                margin-left: 20px;
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 15px;
            }
            .outer{
                display: flex;
                .text{
                    flex: 1;
                    .el-form-item__content{
                        width: 100%;
                        flex: 1;
                    }
                }
                .btn{
                    width: 100px;
                    .el-button{
                        float: right;
                        padding: 10px 30px;
                    }
                }
            }
            .freshbtn{
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .table-container{
                width: 100%;
            }
        }
        .ex-footer{
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding: 35px 10px;
            color: #444;
            font-size: 16px;
            transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
            a{
                color: aqua;
                font-size: 16px;
            }
        }
    }
</style>
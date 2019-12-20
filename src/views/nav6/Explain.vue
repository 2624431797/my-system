<template>
    <section class="explainbox">
        <div class="ex-swiper">
            <slider v-bind="setting" />
        </div>
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
                @click="fresh"
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
import slider from 'vue-image-scroll'

export default {
    data(){
        return {
            setting: {
                styleObject: {
                    width: '1600',
                    height: '526'
                },
                image: [
                    'static/img/0.jpg',
                    'static/img/1.jpg', 
                    'static/img/2.jpg', 
                    'static/img/3.jpg',
                    'static/img/4.jpg',
                    'static/img/5.jpg',
                    'static/img/6.jpg',
                    'static/img/7.jpg',
                    'static/img/8.jpg',
                ],
                interval: 5000,
                imgStyle: {
                    width: '1600',
                    height: '526'
                },
            },
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
    components : {
        slider
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
        fresh(){
            this.isRouterAlive = false
            this.loading = true
            setTimeout(() => {
                this.$nextTick(() => {
                    this.isRouterAlive = true
                    this.loading = false
                })
            }, 2000);
        },
    }
}
</script>

<style lang="scss">
    .explainbox{
        .ex-swiper{
            width: 100%;
            padding: 30px 0 10px 20px;
            background: rgb(27, 25, 25);
            .slider{
                .button{
                    top: calc(100% - 50px); 
                    em{
                        width: 30px!important;
                        height: 3px!important;
                        margin: 0 4px;
                    }
                }
                .control{
                    em{
                        display: block;
                        width: 44px!important;
                        height: 44px!important;
                        background-color: rgba(0, 0, 0, .5);
                        border-radius: 50%;
                    }
                    em:first-child{
                        left: 50px!important;
                    }
                    em:last-child{
                        right: 50px!important;
                    }
                }
            }
        }
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
<template>
    <section class="setuserbox">
        <el-card 
            class="box-card"
            shadow
        >
            <h3 class="setuser-header">
                <b>· 修改用户 编辑用户</b>
                <el-button icon="el-icon-arrow-left" @click="goback">返回</el-button>
            </h3>
            <el-form ref="form" :model="form" label-width="180px">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="登录用户名">
                    <el-input v-model="form.nickName"></el-input>
                </el-form-item>
                <el-form-item label="手机">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.no"></el-input>
                </el-form-item>
                <el-form-item label="固定电话">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="form.status">
                    <el-radio :label="0">未激活</el-radio>
                    <el-radio :label="1">已激活</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="用户类型">
                    <el-radio-group v-model="form.userType">
                    <el-radio label="0">注册用户</el-radio>
                    <el-radio label="1">后台配置用户</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.remarks"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="info">保存</el-button>
                    <el-button type="primary">立即创建</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </section>
</template>

<script>
export default {
    data(){
        return {
            form: {
                id: null,
                no: '',
                name: '',
                nickName: '',
                phone: '',
                email: '',
                mobile: '',
                status: 1,
                userType: '1',
                remarks: ''
            }
        }
    },
    methods : {
        goback(){
            this.$router.go(-1);
        },
    },
}
</script>

<style lang="scss">
    .box-card {
        width: 100%;
        border: 1px solid #d3dce6;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        .el-card__body{
            .setuser-header{
                width: 100%;
                margin-bottom: 10px;
                b{
                    font-size: 16px;
                    font-weight: bold;
                    color: #333;
                    margin-left: 25px;
                    line-height: 50px;
                }
                .el-button{
                    float: right;
                    margin-right: 20px;
                    padding: 10px 30px;
                }
            }
            .el-form{
                .el-form-item{
                    .el-form-item__label{
                        padding: 0 30px 0 0;
                    }
                }
            }
        }
    }
</style>
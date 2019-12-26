<template>
    <section class="setuserbox">
        <el-card 
            class="box-card"
            shadow
        >
            <h3 class="setuser-header">
                <b v-if="icon">· 新增用户</b>
                <b v-else>· 编辑用户</b>
                <el-button icon="el-icon-arrow-left" @click="goback">返回</el-button>
            </h3>
            <el-form 
                ref="form" 
                :model="form" 
                :rules="rules"
                label-width="180px"
            >
                <el-form-item label="姓名" prop="name">
                    <el-input 
                        prefix-icon="fa fa-heart-o" 
                        v-model="form.name" 
                        placeholder="请输入姓名"
                    ></el-input>
                </el-form-item>
                <el-form-item label="登录用户名" prop="title">
                    <el-input 
                        v-model="form.title"
                        prefix-icon="el-icon-user" 
                        placeholder="请输入用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="phone">
                    <el-input 
                        v-model="form.phone"
                        prefix-icon="el-icon-phone-outline" 
                        placeholder="请输入手机号"
                    ></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input 
                        v-model="form.email"
                        prefix-icon="el-icon-eleme" 
                        placeholder="请输入邮箱"
                    ></el-input>
                </el-form-item>
                <el-form-item label="发布时间" prop="createTime">
                    <el-date-picker
                        v-model="form.createTime"
                        type="datetime"
                        placeholder="选择日期时间"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input 
                        v-model="form.address"
                        prefix-icon="el-icon-office-building" 
                        placeholder="请输入地址"
                    ></el-input>
                </el-form-item>
                <el-form-item label="固定电话" prop="phone">
                    <el-input 
                        v-model="form.phone"
                        prefix-icon="fa fa-volume-control-phone" 
                        placeholder="请输入固定电话号"
                    ></el-input>
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-radio-group v-model="form.status">
                    <el-radio :label="0">未激活</el-radio>
                    <el-radio :label="1">已激活</el-radio>
                    <el-radio :label="2">超级管理员</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="选择头像">
                    <el-upload
                        class="avatar-uploader"
                        :action="baseURL + '/api/v1/inituserlist/' + form.id"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                    >
                        <img v-if="form.img" :src="form.img" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.remarks"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="handleClickSaveBtn" v-if="icon" type="primary">立即创建</el-button>
                    <el-button @click="handleClickEditBtn" v-else type="primary">立即保存</el-button>
                    <el-button @click="resetForm('form')" type="primary">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </section>
</template>

<script>
import { editUserList, initUserList, addUserList } from "@/mock/mock"
import { handleMobileNumber } from "@/api/validate"

export default {
    data(){
        return {
            form: {
                id : null,
                name : '',
                title : '',
                phone : null,
                email : '',
                address : '',
                status : '',
                remarks : '',
                createTime : '',
                img : '',
            },
            icon : "",
            imageUrl : "",
            baseURL : "http://rap2api.taobao.org/app/mock/240339",
            rules : {
                name : [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                title : [
                    { required: true, message: '请输入登录用户名', trigger: 'blur' },
                ],
                phone : [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    // { validator: handleMobileNumber, trigger: 'change' }
                ],
                email : [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                ],
                createTime : [
                    { required: true, message: '请输入发布时间', trigger: 'blur' },
                ],
                address : [
                    { required: true, message: '请输入地址', trigger: 'blur' },
                ],
                status : [
                    { required: true, message: '请选择状态', trigger: 'blur' },
                ],
            },
        }
    },
    methods : {
        goback(){
            this.$router.go(-1);
        },
        loaded(){
            this.icon = this.$route.params.icon

            let para = {id : this.$route.params.row.id}
            editUserList(para).then(res => {
                this.form = res
            })
        },
        handleAvatarSuccess(res, file){
            if(res.status == 1){
                this.adminInfo.avatar = res.image_path;
            }else{
                this.$message.error('上传图片失败！');
            }
        },
        handleClickSaveBtn(){
            addUserList(this.form).then(res => {
                this.$confirm(res.msg + ", 是否返回列表?", "提示", {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    this.$router.push({
                        path : "setting"
                    })
                }).catch(msg => {
                    console.log(msg)
                })
            })
        },
        handleClickEditBtn(){
            let para = this.form.id
            initUserList(para, this.form).then(res => {
                this.$confirm("保存成功, 是否返回列表?", "提示", {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    this.$router.push({
                        path : "setting"
                    })
                }).catch(msg => {
                    console.log(msg)
                })
            })
        },
        resetForm(formName){
            this.$refs[formName].resetFields();
        }
    },
    created(){
        this.loaded()
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
                    font-size: 18px;
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
                .avatar-uploader .el-upload {
                    border: 1px dashed #d9d9d9;
                    border-radius: 6px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                }
                .avatar-uploader .el-upload:hover {
                    border-color: #409EFF;
                }
                .avatar-uploader-icon {
                    font-size: 28px;
                    color: #8c939d;
                    width: 178px;
                    height: 178px;
                    line-height: 178px;
                    text-align: center;
                }
                .avatar {
                    width: 178px;
                    height: 178px;
                    display: block;
                }
            }
        }
    }
</style>
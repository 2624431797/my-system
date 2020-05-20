<template>
    <section class="loginbox">
        <vue-particles
            color="#dedede"
            :particleOpacity="0.3"
            :particlesNumber="40"
            shapeType="circle"
            :particleSize="4"
            linesColor="#FFFFFF"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="cashbox"
        >
        </vue-particles>
        <el-form 
            :model="ruleForm2" 
            :rules="rules2" 
            ref="ruleForm2" 
            label-position="left" 
            label-width="0px" 
            class="demo-ruleForm login-container"
        >
            <h3 class="title">系 统 登 录</h3>
            <el-form-item prop="account">
                <el-input 
                    type="text" 
                    v-model="ruleForm2.account" 
                    auto-complete="off"
                    placeholder="账号"
                ></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input 
                    type="password" 
                    v-model="ruleForm2.checkPass" 
                    auto-complete="off" 
                    placeholder="密码"></el-input>
            </el-form-item>
            <el-checkbox 
                v-model="checked" 
                checked 
                class="remember">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button 
                    type="primary" 
                    style="width:70%;margin-left:50px;" 
                    @click.native.prevent="handleSubmit2" 
                    @keyup.enter.native="haner" 
                    :loading="logining">登录</el-button>
                <!-- <el-button 
                    @click.native.prevent="handleReset2">重置</el-button> -->
            </el-form-item>
        </el-form>
    </section>
</template>

<script>
    import { requestLogin } from '../../api/api';

    export default {
        data() {
            return {
                logining: false,
                ruleForm2: {
                    account: 'admin',
                    checkPass: '949995'
                },
                rules2: {
                    account: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        //{ validator: validaePass }
                    ],
                    checkPass: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        //{ validator: validaePass2 }
                    ]
                },
                checked: true
            };
        },
        methods: {
            haner(){
               console.log(0)
            },
            handleReset2() {
               this.$refs.ruleForm2.resetFields();
            },
            handleSubmit2(ev) {
                var _this = this
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        //_this.$router.replace('/table');
                        this.logining = true;
                        //NProgress.start();
                        var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
                        requestLogin(loginParams).then(data => {
                            this.logining = false;
                            //NProgress.done();
                            let { msg, code, user } = data;
                            if (code !== 200) {
                                this.$message({
                                    message: msg,
                                    type: 'error'
                                })
                            } else {
                                sessionStorage.setItem('user', JSON.stringify(user))
                                this.$router.push({ path: '/checking' })
                            }
                        })
                    } 
                    else {
                        return false
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loginbox{
        width: 100%;
        height: 100%;
        background: url('../../assets/check.jpg') no-repeat;
        background-size: 100%;
        overflow: hidden;
        .cashbox{
            width: 100%;
            position: fixed;
            top: 0;
        }
        .login-container {
            width: 350px;
            margin: 180px auto;
            padding: 35px 35px 15px 35px;
            font-size:14px;
            background-clip: padding-box;
            border-radius: 5px;
            box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 15px 0 rgba(0, 0, 5, 0.3);
            .title {
                margin: 0px auto 40px auto;
                text-align: center;
                color: #fff;
                font-size: 20px;
                font-weight: bold;
            }
            .remember {
                color: #fff;
                margin: 0px 0px 35px 0px;
            }
        }
    }
</style>
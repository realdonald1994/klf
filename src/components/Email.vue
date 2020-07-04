<template>
  <el-form class="container-login" label-position="left" label-width="0px" :rules="rules" :model="emailForm" ref="ruleForm">
    <h3 class="title-login">Email</h3>
    <el-form-item prop="username">
      <el-input v-model="emailForm.username" placeholder="name" prefix-icon="el-icon-user"></el-input>
    </el-form-item>
    <el-form-item prop="email">
      <el-input v-model="emailForm.email" placeholder="email" prefix-icon="el-icon-s-promotion "></el-input>
    </el-form-item>
    <el-form-item prop="message">
      <el-input type="textarea" v-model="emailForm.message" placeholder="message" :autosize="{ minRows: 3, maxRows: 8}" clearable maxlength="1000" show-word-limit></el-input>
    </el-form-item>
    <div class="login_remember"></div>
    <el-form-item style="width: 100%">
      <router-link to="/login"><el-button type="info" class="btn-login" style="float: left">Cancel</el-button></router-link>
      <el-button type="primary" class="btn-login" @click="login" style="float: right">Send</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "Email",
    data () {
      return {
        emailForm: {
          username: '', email: '', message:''
        }, rules: {
          username: [{required: true, message: 'Name can\'t be empty', trigger: 'blur'}],
          email: [{required: true, message: 'Email can\'t be empty', trigger: 'blur'},{
            type: 'email',
            message: 'Please input the correct email address',
            trigger: ['blur', 'change']
          }]
        }, loading: false, checked: true
      }
    },
    methods:{
      login () {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$axios.post('/email', {
              username: this.emailForm.username,
              email: this.emailForm.email,
              message: this.emailForm.message
            }).then(res => {
              if (res.status === 200) {
                this.$message.success('send email successfully')
                this.emailForm = {
                  username: '', email: '', message:''
                }
              }
            }).catch(err => {
              this.$message.error('send email failed')
            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .btn-login {
    /*background-color: #505458;*/
    width: 40%;
    border: none;
  }
  .container-login {
    border-radius: 15px;
    width: 350px;
    height: 400px;
    background-color: #fff;
    padding: 35px 35px 15px 35px;
    margin: 0 auto;
    background-clip: padding-box;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title-login {
    margin: 40px auto;
    text-align: center;
    color: #505458;
  }
  body {
    margin: 0;
  }
  .login_remember {

    text-align: left;
    height: 10px;
  }
</style>
<template>
  <!--<body id="poster" v-loading="loading">-->
    <el-form class="container-login" label-position="left" label-width="0px" :rules="rules" :model="loginForm" ref="ruleForm">
      <h3 class="title-login">Login</h3>
      <el-form-item prop="name">
        <el-input v-model="loginForm.name" placeholder="name" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item prop="password" style="margin-top: 45px">
        <el-input v-model="loginForm.password" placeholder="password" show-password prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <div class="login_remember"></div>
      <el-form-item style="width: 100%">
        <router-link to="/register"><el-button type="info" class="btn-login" style="float: left">Register</el-button></router-link>
        <el-button type="primary" class="btn-login" @click="login" style="float: right">Login</el-button>
      </el-form-item>
    </el-form>
  <!--</body>-->
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: 'name can\'t be empty', trigger: 'blur' }],
        password: [{ required: true, message: 'Password can\'t be empty', trigger: 'blur' }]
      },
      loading: false,
      checked: true
    }
  },
  methods: {
    login () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const _this = this
          this.$axios.post('/login', {
            name: this.loginForm.name,
            password: this.loginForm.password
          }).then(res => {
            if (res.status === 200) {
              _this.$store.commit('LOGIN', res.data)
              _this.$router.replace({ path: '/adminHome' })
            }
          }).catch(err => {
            this.$message.error('name or password error')
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
    margin: 0px 0px 35px 0px;
    text-align: left;
    height: 10px;
  }
</style>

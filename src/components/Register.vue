<template>
  <!--<body id="paper" v-loading="loading">-->
    <el-form ref="form" :model="registerForm" label-width="0px" label-position="left" class="container-register" :rules="rules">
      <h3 class="title-register">Register</h3>
      <el-form-item prop="name">
        <el-input v-model="registerForm.name" placeholder="name" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item prop="password" style="margin-top: 45px">
        <el-input v-model="registerForm.password" placeholder="password" show-password prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <div class="login_remember"></div>
      <el-form-item style="width: 100%">
        <el-button type="info" class="btn-register" @click="$router.back()" style="float: left">Cancel</el-button>
        <el-button type="primary" class="btn-register" @click="register" style="float: right">Register</el-button>
      </el-form-item>
    </el-form>
    <!--</body>-->
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      registerForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [{ required: true, message: 'name can\'t be empty', trigger: 'blur' }],
        password: [{ required: true, message: 'Password can\'t be empty', trigger: 'blur' }],
      },
      loading: false
    }
  },
  methods: {
    register () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$axios.post('/register', {
            name: this.registerForm.name,
            password: this.registerForm.password,
          }).then(res => {
            if (res.status === 200) {
              console.log(res)
              this.$alert('Registered successfully', 'Information', {
                confirmButtonText: 'Ok'
              })
              this.$router.replace('/login')
            }
          }).catch(err => {
            this.$message.error('register failed')
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
  .container-register {
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
  .title-register {
    margin: 40px auto;
    text-align: center;
    color: #505458;
  }
  body {
    margin: 0;
  }
  .btn-register {
    /*background-color: #505458;*/
    width: 40%;
    border: none;
  }
  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
    height: 10px;
  }
</style>

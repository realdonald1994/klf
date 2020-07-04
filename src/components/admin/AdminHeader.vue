<template>
  <el-card class="admin-header">
    <a href="#">
      <img src="../../assets/klf-logo-Black.png" alt="" class="header-img">
    </a>

    <el-dropdown trigger="click" style="float: right;margin-right: 20px">
      <span class="el-dropdown-link">
        <span style="font-size:16px;">{{username}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-button type="text" @click="logout" style="outline: none">
            <i class="el-icon-message-solid"></i>Log out
          </el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-avatar class="user-btn" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" ></el-avatar>
  </el-card>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      username:this.$store.getters.getUser
    }
  },
  methods: {
    logout () {
      this.$axios.get('logout').then(res => {
        if (res && res.status === 200) {
          this.$store.commit('LOGOUT')
          this.$message.success('logout successfully')
          this.$router.replace('/login')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },

}
</script>

<style scoped>
  .user-btn {
    cursor: pointer;
    outline:0;
    float:right;
    font-size: 40px;
    margin-right: 10px;
    margin-top: -10px;
    height: 55px;
    width: 55px;
  }
  .header-img {
    width:140px;
    float: left;
    margin-top: -5px;
    height: 55px;
  }
  .admin-header {
    height: 80px !important;
    opacity: 0.85;
    line-height: 40px;
    min-width: 900px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 16px;
  }
</style>

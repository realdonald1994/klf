<template>
  <el-menu :default-active="currentPath" class="el-menu-admin" router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
    <div style="height: 120px;"></div>
    <el-menu-item :index="'/adminHome'" style="text-align: left">
      <i class="el-icon-s-home"></i>
      <span style="font-size: 15px">Home</span>
    </el-menu-item>
    <el-submenu  :index="'/adminManagement'" style="text-align: left">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title" style="font-size: 15px">Admin Management</span>
      </template>
      <el-menu-item :index="'/admin/dashboard'">
        <i class="el-icon-s-platform"></i>
        Dashboard
      </el-menu-item>
      <el-menu-item :index="'/admin/log'">
        <i class="el-icon-document"></i>
        System Log
      </el-menu-item>
      <el-menu-item :index="'/admin/userProfile'">
        <i class="el-icon-s-custom"></i>
        User Profile
      </el-menu-item>
    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  name: 'AdminMenu',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
  },
  computed: {
    currentPath () {
      if (this.$route.matched.length > 1) {
        return this.$route.matched[1].path
      } else {
        return this.$route.path
      }
    }
  }
}
</script>

<style scoped>
  .el-menu-admin {
    border-radius: 5px;
    height: 100%;
  }
</style>

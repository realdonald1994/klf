<template>
  <el-menu class="navbar" :default-active="currentPath" mode="horizontal" background-color="white" text-color="#222" active-text-color="red" :router="true">
    <el-row>
     <el-col :sm="{span:4,offset:1}" :xs="{span:3}" >
       <el-image style="width:140px;height: 55px; margin: 11px 0" fit="fill" :src="url"></el-image>
     </el-col>
      <el-col :sm="{span:3,push:12}" :xs="{span:2,offset:0}" style="padding-top: 50px">
        <router-link :to="{path:'/email'}" class="link"> <span class=" ">Contact</span></router-link>
      </el-col>

      <el-col :sm="{span:1,push:11}" :xs="{span:1,offset:0}" style="padding-top: 50px">
        <el-divider direction="vertical"></el-divider>
      </el-col>
      <el-col :sm="{span:3,push:11}" :xs="{span:2,offset:0}" style="padding-top: 50px">
        <router-link :to="{path:'/login'}" class="link">Login</router-link>
        <!--<el-link href="#" icon="el-icon-s-promotion" :underline="false" class="link el-link.el-link&#45;&#45;info"  type="info">real@gmail.com</el-link>-->
      </el-col>
    </el-row>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      url: require('../../assets/klf-logo-Black.png')
    }
  },
  methods: {
   
  },
  computed: {
    currentPath () {
      const x = this.$route.path.indexOf('/', 1)
      if (x !== -1) {
        return this.$route.path.substring(0, x)
      } else {
        return this.$route.path
      }
    }
  }
}
</script>

<style scoped>
  .navbar {
    min-width: 1300px;
  }
  .link {
    margin-top: 38px;
    letter-spacing: 2px;
    font-weight: bolder;
    font-family: 'roboto';
    text-decoration: none;
  }
</style>

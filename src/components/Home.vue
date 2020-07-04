<template>
  <el-container id="paper">
    <el-header class="header">
      <nav-menu class="nav-menu"></nav-menu>
    </el-header>
    <el-container>
      <el-main class="main" style="margin: 150px auto;overflow: hidden">
        <el-row type="flex" justify="center">
          <el-col :sm="{span:4,pull:3}" class="hidden-xs-only" >
            <transition name="el-fade-in">
              <Business v-show="show" class="slide-fade-enter-active"></Business>
            </transition>
          </el-col>
          <el-col :sm="{span:8,push:5}" :xs="24" >
            <router-view :key="$route.fullPath"></router-view>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <!--<el-row>-->
    <!--  <el-col :sm="{span:4,push:3}" :xs="24" style="margin:90px 0 20px 18px">-->

    <!--    <Footer></Footer>-->

    <!--  </el-col>-->
    <!--</el-row>-->
  </el-container>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
import Business from "@/components/common/Business";
import Footer from "@/components/common/Footer";
export default {
  name: 'Home', components: { NavMenu,Business,Footer },
  data(){
    return{
      show:false
    }
  },
  mounted(){
    this.show = true
  }
}
</script>

<style scoped>
  .nav-menu {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    position: relative;
    width: 100%;
  }
  #paper {
    background: url("../assets/home.jpg") no-repeat center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
    overflow: scroll;
    overflow-x:hidden;
  }
  .header {
    padding: 0;
  }
  .main {
    padding: 0;
  }
  .slide-fade-enter-active {
    transition: all 3s ease;
  }

</style>

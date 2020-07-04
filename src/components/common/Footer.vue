<template>
  <el-card class="container" shadow="always">
    <h3>Contact Us:</h3>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Name: ">
        <el-input v-model="formInline.user" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item label="Email: ">
        <el-input v-model="formInline.email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item label="Message:">
        <el-input type="textarea" v-model="formInline.message" placeholder="Message"></el-input>
      </el-form-item>
      <el-form-item style="float: right">
        <el-button type="primary" @click="onSubmit" >Send</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        formInline: {
          user: '',
          email: '',
          message:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  .container {
    border-radius: 15px;
    width: 450px;
    padding: 0px 15px 15px 15px;
    margin: 0 auto ;
    background-clip: padding-box;

    background-color: transparent;
    letter-spacing: 2px;
    font-weight: bolder;
    font-family: 'roboto';
  }
  h3 {

  }
</style>
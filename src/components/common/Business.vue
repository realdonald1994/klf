<template>
  <el-card class="container" shadow="never">
    <h1 class="title3">CORE SERVICES</h1>
    <el-divider class="el-divider--horizontal el-divider"></el-divider>
    <p>WE PROVIDE END-TO-END SOLUTIONS FROM EMPLOYEE ENGAGEMENT SOFTWARE DEVELOPMENT TO LAST-MILE REWARD LOGISTICS.</p>
  </el-card>
</template>

<script>
  export default {
    name: "Business"
  }
</script>

<style scoped>
  .container {
    border-radius: 15px;
    width: 450px;
    background-color: #fff;
    padding: 25px 35px 15px 35px;
    margin: 0 auto;
    background-clip: padding-box;
    border: 1px solid #eaeaea;

    background-color: transparent;
    letter-spacing: 2px;
    font-weight: bolder;
    color: #7d4141;
    font-family: 'roboto';
  }
  .el-divider--horizontal{
    height: 2px !important;
  }
  .el-divider {
    background-image: linear-gradient(to right, #c32a2a , yellow);
  }
  h1{
    font-size: 25px;
  }
  p{
    line-height: 200%;
    background-image: -webkit-linear-gradient(45deg, #900a0a, #847373, #2b121b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .title3{

    color: transparent !important;

    background-color : black !important;

    text-shadow : rgba(255,255,255,0.5) 0 5px 6px, rgba(255,255,255,0.2) 1px 3px 3px !important;

    -webkit-background-clip : text !important;
  }
  .link {
    margin-top: 38px;
    letter-spacing: 2px;
    font-weight: bolder;
    font-family: 'roboto';
  }

</style>
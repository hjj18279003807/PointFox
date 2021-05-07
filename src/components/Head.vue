<template>
  <div id="headerBook">
    <el-header id="indexHeader">
      <div id="message">{{ message }}</div>
      <div id="headerFunction">
        <router-link to="/login">
          <el-button type="primary" abled>学生信息</el-button>
        </router-link>
        <router-link to="/work">
          <el-button type="success" abled>系统登录</el-button>
        </router-link>
        <router-link to="/student">
          <el-button type="warning" abled>审核中心</el-button>
        </router-link>
        <router-link to="/book">
          <el-button type="danger" abled>图片管理</el-button>
        </router-link>
        <router-link to="/cnnode">
        <el-button type="info">node论坛</el-button>
        </router-link>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "江西软件职业技术大学-图片工程",
    };
  },
};
</script>

<style scoped>
#headerBook {
  background-color: #244152;
}
#message {
  width: 500px;
  /*  background-color: red; */
  color: #0a9588;
  font-size: 30px;
  font-weight: bolder;
  height: 60px;
  line-height: 60px;
  display: inline-block;
}
#headerFunction {
  float: right;
  display: inline-block;
  /* width: 200px; */
  line-height: 55px;
  /* background-color:green; */
}
#headerFunction > .el-button {
  display: inline-block;
  margin-top: 8px;
  background-color: #0a9588;
  text-align: center;
}
</style>
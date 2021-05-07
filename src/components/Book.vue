<template>
  <div>
    <div id="boo">
      <router-link to="/login">
        <el-button type="text">学生信息</el-button>
      </router-link>
      <router-link to="/work">
        <el-button type="text">系统登录</el-button>
      </router-link>
      <router-link to="/student">
        <el-button type="text">审核中心</el-button>
      </router-link>
      <router-link to="/bug">
        <el-button type="text" :plain="true" @click.native="open2"
          >服务异常</el-button
        >
      </router-link>
      <router-link to="/book">
        <el-button type="text">图片管理</el-button>
      </router-link>
    </div>
    <div>
      <router-link to="/hupo">
        <el-button type="primary" round>湖泊</el-button>
      </router-link>
      <router-link to="/leaf">
        <el-button type="success" round>叶子</el-button>
      </router-link>
      <router-link to="/river">
        <el-button type="warning" round>河流</el-button>
      </router-link>
      <router-link to="/senglin">
        <el-button type="danger" round>森林</el-button>
      </router-link>
      <router-link to="/Qiehuan">
        <el-button type="primary" :loading="true">评分统计</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open2() {
      const h = this.$createElement;
      this.$notify({
        title: "面对疾风吧",
        message: h("div", { style: "color: blue" }, ["灵魂莲花",
        h("div",{ style: "color: red" },"疾风剑豪"),
        h("div", { style: "color:purple" }, "亚索"),])
      });
    },
  },
};
</script>

<style  scoped>
div {
  display: inline-block;
}
#boo {
  width: 110px;
  float: left;
}
</style>
<template>
  <el-container>
  <el-header><Head/></el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
  <el-footer><Footer/></el-footer>
</el-container>

</template>

<script>
import Head from "./components/Head.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Head,
   Footer
  },
};
</script>
<style>
*{
  margin: 0px;
  padding:0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

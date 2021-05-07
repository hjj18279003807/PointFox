<template>
 <div>
  <el-tabs v-model="activeName" >
    <el-tab-pane label="王小虎" name="first" ></el-tab-pane>
    <el-tab-pane label="李大虎" name="second"></el-tab-pane>
    <el-tab-pane label="陈小龙" name="third"></el-tab-pane>
    <el-tab-pane label="吴大龙" name="fourth"></el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
};
</script>

<style scoped>


</style>
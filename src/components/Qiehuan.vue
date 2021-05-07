<template>
  <div id="qiehu">
    <el-progress
      :text-inside="true"
      :stroke-width="26"
      :percentage="70"
    ></el-progress>
    <el-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    ></el-progress>
    <el-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    ></el-progress>
    <el-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    ></el-progress>

    <el-progress type="circle" :percentage="70"></el-progress>
    <el-progress type="circle" :percentage="100" color="green"></el-progress>
    <el-progress type="circle" :percentage="80" color="orange"></el-progress>
    <el-progress type="circle" :percentage="50" color="red"></el-progress>
  </div>
</template>
  
  <script>
export default {};
</script>

  <style scoped>
#qiehu {
  width: 550px;
}
*{
   margin-top: 15px;
}
</style>
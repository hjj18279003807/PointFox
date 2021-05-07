<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="purple"
      text-color="black"
      active-text-color="yellow"
    >
      <el-menu-item index="0">出生日期</el-menu-item>
      <el-submenu index="1">
        <template slot="title">选择年份</template>
        <el-menu-item index="1-3">2018</el-menu-item>
        <el-menu-item index="1-1">2019</el-menu-item>
        <el-menu-item index="1-2">2020</el-menu-item>
        <el-menu-item index="1-3">2021</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选择日期</template>
          <el-menu-item index="2-4-1">1</el-menu-item>
          <el-menu-item index="2-4-2">2</el-menu-item>
          <el-menu-item index="2-4-3">3</el-menu-item>
          <el-menu-item index="1-4-4">4</el-menu-item>
          <el-menu-item index="1-4-5">5</el-menu-item>
          <el-menu-item index="1-4-6">6</el-menu-item>
          <el-menu-item index="1-4-7">7</el-menu-item>
          <el-menu-item index="1-4-8">8</el-menu-item>
          <el-menu-item index="1-4-9">9</el-menu-item>
          <el-menu-item index="1-4-10">10</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2" disabled>暂无服务</el-menu-item>
      <el-menu-item index="3"
        ><a href="https://www.ele.me" target="_blank"
          >Element官网</a
        ></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
</script>

<style scoped>
</style>

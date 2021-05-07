<template>
  <div>
    <div id="stud">
      <router-link to="/login">
        <el-button type="text">学生信息</el-button>
      </router-link>
      <router-link to="/work">
        <el-button type="text">系统登录</el-button>
      </router-link>
      <router-link to="/student">
        <el-button type="text">审核中心</el-button>
      </router-link>
      <router-link to="jing">
      <el-button type="text" :plain="true" @click.native="open">服务异常</el-button>
      </router-link>
      <router-link to="/book">
        <el-button type="text">图片管理</el-button>
      </router-link>
    </div>

    <div class="block">
      <div class="radio">
        排序：
        <el-radio-group v-model="reverse">
          <el-radio :label="true">正序</el-radio>
          <el-radio :label="false">倒序</el-radio>
        </el-radio-group>
      </div>
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
    <i class="el-icon-phone-outline"></i>
    <el-link type="danger" @click="open1">举报电话:13838383388</el-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "申请成功",
          timestamp: "2021-04-16",
          size: "large",
        },
        {
          content: "通过审核",
          timestamp: "2021-04-13",
          icon: "el-icon-more",
          type: "primary",
          size: "large",
        },
        {
          content: "申请时间",
          timestamp: "2021-04-11",
          color: "#0bbd87",
          size: "large",
          type: "primary",
        },
      ],
    };
  },
  methods: {
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: "正在为您呼叫",
        message: h("i", { style: "color: red" }, "13838383388"),
      });
    },
    open() {
      const h = this.$createElement;
      this.$message({
        message: h(
          "div",
          { style: "color:blue" },
         [ "小子，",
          h("div", { style: "color:brown" }, "吃我一枪----"),
          h("div", { style: "color:red" }, "腥红之月"),
          h("div", { style: "color:purple" }, "烬")
          ]),
        type: "warning",
      });
      alert("点击彩蛋")
    },
  },
};
</script>

<style scoped>
div {
  display: inline-block;
}
#stud {
  width: 110px;
  float: left;
}
</style>

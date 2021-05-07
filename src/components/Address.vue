<template>
  <div class="box">
    <div class="top">
      <el-tooltip
        class="item"
        effect="dark"
        content="上海市省会"
        placement="top-start"
      >
        <el-button>上海</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="中国首都"
        placement="top"
      >
        <el-button>北京</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="天津市省会"
        placement="top-end"
      >
        <el-button>天津</el-button>
      </el-tooltip>
    </div>
    <div class="left">
      <el-tooltip
        class="item"
        effect="dark"
        content="江西省省会"
        placement="left-start"
      >
        <el-button>南昌</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="浙江市省会"
        placement="left"
      >
        <el-button>杭州</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="湖北省省会"
        placement="left-end"
      >
        <el-button>武汉</el-button>
      </el-tooltip>
    </div>

    <div class="right">
      <el-tooltip
        class="item"
        effect="dark"
        content="广东省省会"
        placement="right-start"
      >
        <el-button>深圳</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="四川省省会"
        placement="right"
      >
        <el-button>成都</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="英国首都"
        placement="right-end"
      >
        <el-button>伦敦</el-button>
      </el-tooltip>
    </div>
    <div class="bottom">
      <el-tooltip
        class="item"
        effect="dark"
        content="法国首都"
        placement="bottom-start"
      >
        <el-button>巴黎</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="美国经济中心"
        placement="bottom"
      >
        <el-button>纽约</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="日本首都"
        placement="bottom-end"
      >
        <el-button>东京</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.box {
  width: 400px;
}
.top {
  text-align: center;
}

.left {
  float: left;
  width: 60px;
}

.right {
  float: right;
  width: 60px;
}

.bottom {
  clear: both;
  text-align: center;
}

.item {
  margin: 4px;
}

.left .el-tooltip__popper,
.right .el-tooltip__popper {
  padding: 8px 10px;
}
</style>
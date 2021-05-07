<template>
  <div id="logg">
    <div id="log">
      <router-link to="/login">
        <el-button type="text">学生信息</el-button>
      </router-link>
      <router-link to="/work">
        <el-button type="text">系统登录</el-button>
      </router-link>
      <router-link to="/student">
        <el-button type="text">审核中心</el-button>
      </router-link>
      <el-button type="text" disabled>停止服务</el-button>
      <router-link to="/book">
        <el-button type="text">图片管理</el-button>
      </router-link>
      <br />
      <el-popover placement="right" width="400" trigger="click">
        <el-table :data="tableData">
          <el-table-column
            width="150"
            property="date"
            label="日期"
          ></el-table-column>
          <el-table-column
            width="100"
            property="name"
            label="姓名"
          ></el-table-column>
          <el-table-column
            width="300"
            property="address"
            label="地址"
          ></el-table-column>
        </el-table>
        <el-button
          slot="reference"
          icon="el-icon-zoom-in"
        ></el-button>
      </el-popover>
    </div>
    <div id="gin">
      <el-table id="wra" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
          <template slot-scope="scope">
            <router-link to="/date">{{ scope.row.date }}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
          <template slot-scope="scope">
            <router-link to="/name">{{ scope.row.name }}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址" width="380">
          <template slot-scope="scope">
            <router-link to="/address">{{ scope.row.address }}</router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

  <script>
export default {
  name:'login',
  data() {
    return {
      tableData: [
        {
          date: "2020-05-19",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2020-08-05",
          name: "李大虎",
          address: "南昌市新建区红谷滩路 1327 弄",
        },
        {
          date: "2021-03-11",
          name: "陈小龙",
          address: "北京市中关区长城新路 2498 弄",
        },
        {
          date: "2019-12-23",
          name: "吴大龙",
          address: "杭州市西湖区雷峰塔路 2956 弄",
        },
      ],
    };
   
  },
};
</script>

  <style scoped>
div {
  display: inline-block;
}
#log {
  width: 110px;
  float: left;
}
#gin {
  width: 800px;
}
a {
  text-decoration: none;
  color: red;
}
</style>
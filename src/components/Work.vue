<template>
  <div id="workk">
    <div id="wor">
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
    </div>
    <div id="indexMain">
      <el-main>
        <el-card class="box-card" id="loginCard">
          <div slot="header" class="clearfix">
            <span>系统登录</span>
            <router-link to="/secret" @click.native="kick">
              <el-button style="float: right; padding: 3px 0" type="text"
                >找回密码</el-button
              >
            </router-link>
          </div>
          <div id="loginContent">
            <el-avatar :size="40" icon="el-icon-user-solid"></el-avatar>
            <el-input clearable v-model="user.username"></el-input>
            <el-input
              clearable
              v-model="user.password"
              show-password
              @keyup.enter.native="enter1"
            ></el-input>
            <router-link to="/aside">
              <el-button id="loginSystem" @click.native="denglu"
                >登录</el-button
              >
            </router-link>
          </div>
        </el-card>
      </el-main>
    </div>
  </div>
</template>

  <script>
import Axios from "axios";
export default {
  data() {
    return {
      user: {
        username: "123456",
        password: "888888",
      },
    };
  },
  props: {
    msg: String,
  },
  methods: {
    enter1: function () {
      alert("亲,密码错误");
    },
    kick: function () {
      alert("正在为您找回密码...");
    },
    denglu: function () {
      Axios.get("http://localhost:3000/login", { params: this.user }).then(
        function (response) {
          alert(response.data.username);
          alert(response.data.passname);
        }
      );
    },
  },
};
</script>

<style scoped>
#wor {
  width: 110px;
  float: left;
}
#loginCard {
  width: 450px;
  margin: 0 auto;
  margin-top: 200px;
  margin-left: 30%;
}
#loginContent > * {
  margin-top: 8px;
}
#loginContent {
  text-align: center;
  margin: 5px;
}
#loginSystem {
  background-color: #0a9588;
  color: white;
  width: 120px;
  display: inline-block;
}
</style>
<template>
  <div>
    <table id="box2" class="boxclass" border="1">
      <tr>
        <td>姓 名</td>
        <input type="text" />
      </tr>
      <tr>
        <td>年 龄</td>
        <input type="text" />
      </tr>
      <tr>
        <td>性 别</td>
        <input type="text" />
      </tr>
      <tr>
        <td>身份证号</td>
        <input type="text" />
      </tr>
      <tr>
        <td>电话号码</td>
        <input type="text" />
      </tr>
      <tr>
        <td>验证码</td>
        <input type="text" />
      </tr>
    </table>
    <br />
    <i class="el-icon-location-information"></i>
    <el-link type="primary" @click="open">要求定位</el-link>
    <br />
    <br />
    <router-link to="/work" @click.native="submit">
      <button id="loginSystem">提交</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    methods: {
      open:function() {
        this.$alert('南昌市-江西软件职业技术大学', '定位成功', {
          confirmButtonText: '确定',
        });
      },
      submit:function(){
         alert('认证成功');
      }
    }
  }
</script>

<style scoped>
#box2 {
  color: blue;
  background-color: #0a9588;
}
#loginSystem {
  background-color: #0a9588;
  width: 70px;
  color:white;
}
</style>

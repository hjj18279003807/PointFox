<template>
  <div class="polaroid">
    <img src="../assets/river.jpeg" alt="river" style="width: 100%" />
    <div class="container">
      <el-rate v-model="value1"></el-rate>
      <router-link to="/senglin" @click.left.native="rev1">
     <button id="rev2">秀丽的河流</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     value1:4.0
    };
  },
  methods: {
    rev1: function () {
      alert("这是陈小龙提供的");
    },
  },
};
</script>

<style scoped>
div.polaroid {
  width: 50%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
div.container {
  text-align: center;
  padding: 5px 10px;
}
#rev2{
  background-color:#0a9588;
  height:30px;
  width:90px;
  font-size:15px;
  border-color:green;
  color:white;
  }
</style>
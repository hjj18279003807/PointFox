<template>
  <div class="polaroid">
    <img src="../assets/hupo.jpeg" alt="hupo" style="width: 100%" />
    <div class="container">
      <el-rate v-model="value1"></el-rate>
       <router-link to="/leaf" @click.left.native="rev1">
      <button  id="rev2">漂亮的湖泊</button>
       </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 4,
    };
  },
  methods: {
    rev1: function () {
      alert("这是王小虎提供的");
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
#rev2 {
  background-color: #0a9588;
  height: 30px;
  width: 90px;
  font-size: 15px;
  color: white;
}
</style>
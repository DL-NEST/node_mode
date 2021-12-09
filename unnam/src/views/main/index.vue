<template>
  <div class="main page">
    <div class="main-list">
      <div class="list-icon"></div>
      <div class="list-node" v-for="item in 6" :key="2"></div>
    </div>
    <div class="main-content">

    </div>
  </div>
</template>

<script lang="ts">   模块，
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'main',
  components: {
  },
});
</script>

<style lang="scss" scoped>
.main{
  background-color: white;
  // 布局
  display: flex;
  flex-direction: row;
  // 列表
  .main-list{
    background-color: aqua;
    flex-grow: 2;
    .list-icon{
      background-color: antiquewhite;
      width: 100%;
      height: 90px;
      margin-bottom: 10px;
    }
    .list-node{
      background-color: antiquewhite;
      width: 100%;
      height: 65px;
      margin-bottom: 10px;
    }
  }
  // 内容
  .main-content{
    background-color: #727272;
    flex-grow: 8;
  }
}
</style>

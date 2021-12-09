<template>
  <div class="main-content">
    <div class="content-top"></div>
    <div class="content-history"></div>
    <div class="content-router"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'main-content'
});
</script>

<style lang="scss" scoped>
// 内容
.main-content{
  width: 0;
  background-color: #727272;
  flex-grow: 1;
  .content-top{
    position: relative;
    background-color: antiquewhite;
    height: 60px;
  }
  .content-history{
    position: relative;
    height: 25px;
    background-color: aqua;
  }
  .content-router{
    position: relative;
    background-color: aquamarine;
    height: 100%;
    flex-grow: 1;
  }
}
</style>

<template>
  <nav class="main-list">
    <div class="list-icon" @click="btn()">
      <img src="../../../../assets/logo.svg" alt="">
      <p >logo</p>
    </div>
    <div class="list-node" v-for="item in list" :key="2">
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import { KeyOutline } from '@vicons/ionicons5'
import {NIcon} from 'naive-ui';

export default defineComponent({
  name: 'main-list',
  props:['shrink'],
  setup(){

  },
  components: {
    NIcon,
    KeyOutline,
  },
  data(){
    return{
      list:[
        '控制台',
        '信息查询',
        '考勤管理',
        '信息录入',
        '权限管理',
        '管理设置'
      ]
    }
  },
  methods:{
    btn(){
      this.$emit('an');
    }
  }
});
</script>

<style lang="scss" scoped>
nav{
  background-color: rgba(52, 64, 80, 1);
  flex-basis: 14rem;
  transition: flex-basis 0.5s ease-in-out;
  .list-icon{
    text-align: center;
    -webkit-app-region: no-drag;
    background-color: rgb(58, 74, 95);
    margin-bottom: 20px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      font-size: 3em;
      color: #e5e3e3;
      transition: color 0.5s ease-in-out;
    }
    img{
      width: 2.4rem;
    }
  }
  .n-icon {
    height: 1.5em;
    width: 1.5em;
    line-height: 1em;
    text-align: center;
    display: inline-block;
    position: relative;
    fill: currentColor;
    transform: translateZ(0);
    svg{
      height: 1.5em;
      width: 1.5em;
    }
  }
}
// 收回
.shrink{
  nav{
    flex-basis: 4rem;
    .list-icon{
      p{
        color: rgba(0,0,0,0);
        display: none;
      }
    }
  }
}
</style>

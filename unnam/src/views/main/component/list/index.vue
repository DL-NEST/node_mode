<template>
  <div class="main-list">
    <div class="list-icon">
      <p style="font-size: 3em;color: var(--login-main)">logo</p>
    </div>
    <div class="list-node" v-for="item in list" :key="2">
      <div class="list-node-icon">
        <n-icon>
          <key-outline/>
        </n-icon>
      </div>
      <div class="list-node-txt">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { KeyOutline } from '@vicons/ionicons5'
import {NIcon} from 'naive-ui';

export default defineComponent({
  name: 'main-list',
  components: {
    NIcon,
    KeyOutline,
  },
  data(){
    return{
      list:[
        '系统状态',
        '信息查询',
        '考勤管理',
        '信息录入',
        '权限管理',
        '管理设置'
      ]
    }
  }
});
</script>

<style lang="scss" scoped>
.main-list{
  flex-basis: 250px;
  .list-icon{
    background-color: aquamarine;
    margin-bottom: 20px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list-node{
    -webkit-app-region: no-drag;
    margin-bottom: 5px;
    background-color: antiquewhite;
    cursor: pointer;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .list-node-icon{
      height: 100%;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .list-node-txt{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .list-node:hover{
    background-color: #dbffff;
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
</style>

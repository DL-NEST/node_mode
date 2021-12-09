<template>
  <div class="main">
    <div class="head">
      <control-top-main/>
    </div>
    <div class="control">
      <main-list/>
      <main-content/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { KeyOutline } from '@vicons/ionicons5'
import {NIcon} from 'naive-ui';
import controlTopMain from '@/components/control/controlTopMain.vue'
import mainList from '@/views/main/component/list/index.vue'
import mainContent from '@/views/main/component/content/index.vue'

export default defineComponent({
  name: 'app-main',
  components: {
    NIcon,
    KeyOutline,
    controlTopMain,
    mainList,
    mainContent
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
.main{
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: fixed;
  //布局
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .head{
    width: 100%;
    height: 20px;
  }
  .control{
    width: 100%;
    height: 100%;
    background-color: #fdfdfd;
    // 布局
    display: flex;
    flex-direction: row;
  }
}
</style>

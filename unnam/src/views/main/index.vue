<template>
  <div class="main">
    <div class="head">
      <control-top-main/>
    </div>
    <div class="control" ref="pull" v-bind:class="shrink ? '' : 'shrink'" >
      <main-list :shrink="shrink" :shrink_text="shrink_text"/>
      <main-content :shrink="shrink" @an="an"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import { KeyOutline } from '@vicons/ionicons5'
import {NIcon} from 'naive-ui';
import controlTopMain from '@/components/control/controlTopMain.vue'
import mainList from '@/views/main/component/list/index.vue'
import mainContent from '@/views/main/component/content/index.vue'

export default defineComponent({
  name: 'app-main',
  setup(){
    const shrink = ref(true)
    const shrink_text = ref(true)
    return{
      shrink,
      shrink_text
    }
  },
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
  },
  methods:{
    // 伸缩边栏
    an(ars:string){
      if(this.shrink == true){
        this.shrink_text= !this.shrink_text as boolean
        setTimeout(()=>{
          this.shrink= !this.shrink as boolean
        },200)
      }else {
        this.shrink= !this.shrink as boolean
        setTimeout(()=>{
          this.shrink_text= !this.shrink_text as boolean
        },300)
      }
      // (this.$refs.pull as HTMLElement).classList.toggle("shrink");
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

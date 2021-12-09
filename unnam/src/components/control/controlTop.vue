<template>
  <div class="control-top">
    <div class="minimize" @click="switch_btn('minimize')">
      <n-icon>
        <remove-outline/>
      </n-icon>
    </div>
    <div class="close" @click="switch_btn('close')">
      <n-icon>
        <close-outline/>
      </n-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { RemoveOutline,CloseOutline} from '@vicons/ionicons5'
import {defineComponent} from "vue";
import {NIcon} from "naive-ui";
const { ipcRenderer } = window.require("electron");

export default defineComponent({
  name: 'login',
  components:{
    NIcon,
    RemoveOutline,
    CloseOutline
  },
  methods:{
    switch_btn(mState: String){
      ipcRenderer.send("btn_switch", mState);
    }
  }
});
</script>

<style lang="scss" scoped>
.control-top{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    // 布局
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    div{
      -webkit-app-region: no-drag;
      cursor:pointer;
      height: 100%;
      width: 30px;
      color: #727272;
      -moz-user-select:none;/*火狐*/
      -webkit-user-select:none;/*webkit浏览器*/
      -ms-user-select:none;/*IE10*/
      user-select:none;
    }
    div:hover{
      background-color: var(--login-main);
      color: #ffffff;
    }
    .close{
      border-top-right-radius: 4px;
    }
}
.n-icon {
  height: 1.4em;
  width: 1.4em;
  line-height: 1em;
  text-align: center;
  display: inline-block;
  position: relative;
  fill: currentColor;
  transform: translateZ(0);
  svg{
    height: 1.4em;
    width: 1.4em;
  }
}
</style>

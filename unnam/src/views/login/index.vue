<template>
  <control-top/>
  <div class="login page">
    <div class="login-title">
      智道员工管理系统
    </div>
    <div class="login-woc">
      <div class="login-woc-slain"/>
      <p>欢迎登录智道员工管理系统</p>
      <div class="login-woc-slain"/>
    </div>
    <div class="login-from">
      <n-input class="username" placeholder="用户名/邮箱" style="width: 300px;text-align: left">
        <template #prefix>
          <n-icon>
            <person-circle-outline style="margin-right: 10px;"/>
          </n-icon>
        </template>
      </n-input>
      <n-input class="password" placeholder="密码" type="password" show-password-on="mousedown" style="width: 300px;text-align: left">
        <template #prefix>
          <n-icon>
            <key-outline style="margin-right: 10px;"/>
          </n-icon>
        </template>
      </n-input>
    </div>
    <div class="login-sf">
      <n-checkbox class="login-multi">记住密码</n-checkbox>
      <a class="login-wj" href="www.baid.com">忘记密码？</a>
    </div>
    <n-button class="login-btn" text-color="#FFFFFF" color="rgba(55, 98, 130,1)" style="width: 300px;height: 45px" @click="to">用户登录</n-button>
  </div>
</template>

<script lang="ts">
import { FlashOutline as FlashIcon ,PersonCircleOutline,KeyOutline, RemoveOutline,CloseOutline} from '@vicons/ionicons5'
import {defineComponent} from 'vue';
import {NInput,NButton,NCheckbox,NIcon} from 'naive-ui';
const { ipcRenderer } = window.require("electron");
import controlTop from '@/components/control/controlTop.vue'

export default defineComponent({
  name: 'login',
  components:{
    NInput,
    NButton,
    NCheckbox,
    FlashIcon,
    NIcon,
    PersonCircleOutline,
    KeyOutline,
    RemoveOutline,
    CloseOutline,
    controlTop
  },
  methods:{
    to(){
      ipcRenderer.send("main");
      console.log('main');
      this.$router.push('/main')
    },
    switch_btn(mState: String){
      ipcRenderer.send("btn_switch", mState);
    }
  }
});
</script>

<style lang="scss" scoped>
.login{
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  .login-title{
    color: var(--login-main);
    font-family: "Adobe 黑体 Std R";
    font-size: 2em;
    margin-bottom: 20px;
  }
  .login-woc{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
    .login-woc-slain{
      height: 2.8px;
      flex-grow: 5;
      background-color: var(--login-main);
    }
    p{
      flex-grow: 1;
    }
  }
  .login-from{
    display: flex;
    flex-direction: column;
    .username{
      margin-bottom: 20px;
    }
    margin-bottom: 30px;
  }
  .login-sf{
    -webkit-app-region: no-drag;
    width: 78%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 15px;
    .login-wj{
      color: var(--login-main);
      text-decoration:none;
    }
  }
}
.n-input{
  --caret-color: var(--login-main)!important;
  --border-hover: 1px solid var(--login-main)!important;
  --border-focus: 1px solid var(--login-main)!important;
  --loading-color: var(--login-main)!important;
  --box-shadow-focus: 0 0 0 2px rgba(55, 98, 130,0.2)!important;
  --padding-left: 8px!important;
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

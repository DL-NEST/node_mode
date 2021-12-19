<template>
  <nav v-bind:class="shrink_text ? 'main-list' : 'main-list-zero'">
    <div class="list-icon">
      <img src="../../../../assets/logo.svg" alt="">
      <p class="" >logo</p>
    </div>
    <div class="list-node">
      <div class="active-tab" ref="active_tab"></div>
      <div class="node-link active" @click="active($event,0)">
          <n-icon class="node-icon ">
            <speedometer-outline/>
          </n-icon>
        <div class="text">控制台</div>
      </div>
      <div class="node-link" @click="active($event,1)">
        <n-icon class="node-icon">
          <id-card-outline/>
        </n-icon>
        <div class="text">信息查询</div>
      </div>
      <div class="node-link" @click="active($event,2)">
        <n-icon class="node-icon">
          <file-tray-full-outline/>
        </n-icon>
        <div class="text">考勤管理</div>
      </div>
      <div class="node-link" @click="active($event,3)">
        <n-icon class="node-icon">
          <push-outline/>
        </n-icon>
        <div class="text">信息录入</div>
      </div>
      <div class="node-link" @click="active($event,4)">
        <n-icon class="node-icon">
          <key-outline/>
        </n-icon>
        <div class="text">权限管理</div>
      </div>
      <div class="node-link" @click="active($event,5)">
        <n-icon class="node-icon">
          <cog-outline/>
        </n-icon>
        <div class="text">系统设置</div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {routePath} from '@/router/constant';
import {RouteKey,mainRouter} from '@/router/constant/contentrouter'
import { SpeedometerOutline,
  FileTrayFullOutline,
  CogOutline,
  IdCardOutline,
  KeyOutline,
  PushOutline} from '@vicons/ionicons5'

import {NIcon} from 'naive-ui';

export default defineComponent({
  name: 'main-list',
  props:['shrink','shrink_text'],
  setup(){
  },
  components: {
    NIcon,
    SpeedometerOutline,
    FileTrayFullOutline,
    CogOutline,
    IdCardOutline,
    KeyOutline,
    PushOutline
  },
  methods:{
    active(even:any,num:number){
      (this.$refs.active_tab as any).style.top = 18+num*57.5+'px';
      (document.querySelectorAll(".node-link") as any).forEach((node:HTMLElement)=>{
        node.classList.remove("active")
      })
      even.currentTarget.classList.add("active")
      this.$router.push(routePath(mainRouter[num]))
    }
  }
});
</script>

<style lang="scss" scoped>
nav{
  width: 0;
  flex-basis: 13rem;
  transition: flex-basis 0.5s ease-in-out;
  box-shadow: rgba(29,35,41,0.08) 2px 0 8px 0;
  z-index: 40;
  .list-icon{
    user-select:none;
    text-align: center;
    -webkit-app-region: no-drag;
    background-color: var(--main-color);
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      font-size: 2.3em;
      color: var(--main-icon);
      transition: color 0.2s ease-in-out;
    }
    img{
      width: 2rem;
      margin-right: 7px;
    }
  }
  .n-icon {
    height: 1.5em;
    width: 1.5em;
    line-height: 1em;
    svg{
      height: 1.5em;
      width: 1.5em;
    }
  }
  .list-node{
    user-select:none;
    .active-tab {
      margin-left: 0.5rem;
      width: 93%;
      height: 3rem;
      border-radius: 13px;
      position: absolute;
      top: 17.5px;
      left: 0;
      transition: top 0.3s;
      background-color: var(--main-node);
    }
  }
}
// 收回
.shrink{
  nav{
    flex-basis: 4rem;
  }
  .list-icon{
    p{
      display:none;
    }
    img{
      margin-right: 0;
    }
  }
  .list-node{
    .node-link{
      .text{
        z-index: 99;
        display: none;
      }
      .node-icon{
        margin: 0 0 0 2px;
      }
    }
    .active-tab {
      margin-left: 0.5rem;
      width: 78%;
      height: 3rem;
      border-radius: 13px;
      position: absolute;
      top: 17.5px;
      left: 0;
      transition: top 0.3s;
      background-color: var(--main-node);
    }
  }
}
// 收回字体
.main-list-zero{
  .list-icon{
    p{
      color: rgba(0,0,0,0);
    }
  }
  .list-node{
    .node-link{
      .text{
        color: rgba(0,0,0,0);
      }
    }
  }
}
// 列表
.list-node{
  position: relative;
  //background-color: #dbffff;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  .node-link{
    cursor: pointer;
    font-size: 13px;
    -webkit-app-region: no-drag;
    margin-top: 9.5px;
    width: 100%;
    height: 3rem;
    border-radius: 13px;
    padding: 14px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: rgb(132,154,169);
    transition: color 0.3s;
    .node-icon{
      margin-left: 8px;
      margin-right: 10px;
    }
    .text{
      z-index: 99;
      transition: color 0.3s;
    }
  }
  .node-link:hover{
    color: var(--main-node);
  }
  .active{
    color: var(--main-color);
  }
  .active:hover{
    color: var(--main-color);
  }
}
</style>

<template>
  <div class="infoInput">
    <div class="options">
      <div class="link-com">
        <n-select
            style="width: 100px"
            placeholder="选择串口"
            v-model:value="value"
            :options="options"
            :clearable="true"
            :on-focus="handlePorts"
        ></n-select>
        <n-button type="info" @click="link">连接设备</n-button>
      </div>
      <div class="search-user">
        <n-input
            type="text"
            placeholder="查询关键词"
            style="width: 200px"
        />
        <n-button type="info">查询</n-button>
      </div>
      <div class="user-id">
        <p style="margin-right: 5px">ID:</p>
        <n-input
            type="text"
            placeholder="选择的用户id"
            style="width: 200px;margin-right: 10px"
            :disabled="true"
            :value="userid"
        />
      </div>
      <n-button type="info">写入卡数据</n-button>
    </div>
    <div class="user-query">
      <user-grid @setUserid="setUserid" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import serialport from 'serialport';
import {NSelect,NButton,NInput} from 'naive-ui';
import UserGrid from './component/UserGrid.vue'

export default defineComponent({
  name: 'infoInput',
  components:{
    UserGrid,
    NButton,
    NSelect,
    NInput
  },
  setup () {
    const loadingRef = ref(false)
    const optionsRef = ref<any>([])
    const useridRef = ref<string>("eg")
    return {
      value: ref(null),
      loading: loadingRef,
      options: optionsRef,
      userid: useridRef,
      handlePorts: () => {
        loadingRef.value = true
        serialport.list().then(ports=>{
          let portList: any[] = [];
          ports.forEach((port)=>{
            portList.push({"label":port.path,"value":port.path})
          })
          optionsRef.value = portList;
          loadingRef.value = false
        })
      }
    }
  },
  methods:{
    setUserid(userid:any){
      this.userid=userid
    },
    link(){
      window.$message?.success('连接成功')
    }
  }
});
</script>

<style lang="scss" scoped>
.infoInput{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--main-color);
  border-radius: 14px;
}
.infoInput{
  display: flex;
  flex-direction: column;

  .options{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    .link-com{
      margin-right: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 200px;
      justify-content: space-between;
    }
    .search-user{
      margin-right: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 270px;
      justify-content: space-between;
    }
    .user-id{
      font-size: 1em;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

    }
  }
  .user-query{
    width: 100%;
    flex-grow: 1;
  }
}
</style>

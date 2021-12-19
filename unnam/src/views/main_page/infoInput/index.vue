<template>
  <div class="infoInput">
    <n-button @click="are">are</n-button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {NButton} from 'naive-ui';
const { ipcRenderer } = window.require("electron");
import serialport from 'serialport';

export default defineComponent({
  name: 'infoInput',
  components:{
    NButton
  },
  methods:{
    are(){
      ipcRenderer.send("serialport_list");
      console.log(serialport.list());
    }
  }
});
</script>

<style lang="scss" scoped>
.infoInput{
  position: relative;
  width: 100%;
  height: 100%;
  background-color:  var(--main-color);
  border-radius: 14px;
}
</style>

<template>
  <div class="console">
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import serialport from 'serialport';
import {NSelect,NButton,NInput} from 'naive-ui';

export default defineComponent({
  name: 'console',
  components:{
    NButton,
    NSelect,
    NInput
  },
  setup () {

  },
  methods:{
    setUserid(userid:any){
    }
  }
});
</script>

<style lang="scss" scoped>
.console{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--main-color);
  border-radius: 14px;
}
</style>

<template>
  <n-config-provider>
    <naive-global>
      <router-view/>
    </naive-global>
  </n-config-provider>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import { NaiveGlobal } from './components';
import { NConfigProvider } from "naive-ui";

export default defineComponent({
  name:"App",
  components:{
    NConfigProvider,
    NaiveGlobal
  },
  mounted() {
    console.info('%c  _____ _____ ____ _____ \n' +
        ' |_   _| ____/ ___|_   _|\n' +
        '   | | |  _| \\___ \\ | |  \n' +
        '   | | | |___ ___) || |  \n' +
        '   |_| |_____|____/ |_|  \n' +
        '                         ', 'color:#c3b000')
  }
})

</script>

<style lang="scss" scoped>

</style>

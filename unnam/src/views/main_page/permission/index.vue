<template>
  <div class="permission"></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'permission'
});
</script>

<style lang="scss" scoped>
.permission{
  position: relative;
  width: 100%;
  height: 100%;
  background-color:  var(--main-color);
  border-radius: 14px;
}
</style>

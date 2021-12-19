<template>
  <div class="attendance"></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'attendance'
});
</script>

<style lang="scss" scoped>
.attendance{
  position: relative;
  width: 100%;
  height: 100%;
  background-color:  var(--main-color);
  border-radius: 14px;
}
</style>

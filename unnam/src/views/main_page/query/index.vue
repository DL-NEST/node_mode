<template>
  <div class="query"></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'query'
});
</script>

<style lang="scss" scoped>
.query{
  position: relative;
  width: 100%;
  height: 100%;
  background-color:  var(--main-color);
  border-radius: 14px;
}
</style>

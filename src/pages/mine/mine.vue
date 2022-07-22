<template>
  <view class="content"> 我的 </view>
</template>

<script setup lang="ts">
console.log(
  '%c import.meta.env.VITE_SOME_KEY' + import.meta.env.VITE_SOME_KEY,
  'color: red'
);
</script>

<style lang="scss">
.content {
  background: red;
}
</style>

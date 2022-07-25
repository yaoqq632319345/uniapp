<template>
  <view class="content"> 我的 </view>
</template>

<script setup lang="ts">
import request from '../../utils/request';
request({
  url: '/sdklfjlaksdjflksd',
})
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log('%c error' + error, 'color: red');
  });
</script>

<style lang="scss">
.content {
  background: red;
}
</style>

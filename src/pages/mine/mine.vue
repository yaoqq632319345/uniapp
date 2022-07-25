<template>
  <view class="content"> 我的 </view>
  <uni-badge text="1"></uni-badge>
  <uni-badge text="2" type="success" @click="bindClick"></uni-badge>
  <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
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
const bindClick = () => {
  console.log('%c bindClick', 'color: red');
};
</script>

<style lang="scss">
.content {
  background: red;
}
</style>

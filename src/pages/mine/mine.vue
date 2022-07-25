<template>
  <view class="content"> 我的 </view>
  <uni-badge text="1"></uni-badge>
  <uni-badge text="2" type="success" @click="bindClick"></uni-badge>
  <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
  <view>
    <uni-calendar :insert="true" :lunar="true" @change="change" />
  </view>
</template>

<script setup lang="ts">
import request from '../../utils/request';
const change = (e: any) => {
  console.log(e);
};
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
console.log(import.meta.env);
</script>

<style lang="scss">
.content {
  background: red;
}
</style>

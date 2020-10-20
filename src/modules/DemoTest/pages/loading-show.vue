<template>
  <div class="loading-show">
    <p class="text">
      LOADING SHOW
    </p>
    <p class="tip-text">
      loading 开启 5秒后跳转到别的路由的组件
    </p>
  </div>
</template>

<script>
import { ServiceLoading } from '@/widgets/loading'
export default {
  created () {
    ServiceLoading.show({
      background: '#fbfbfba1'
      // text: 'loading 开启 5秒后跳转到别的路由的组件'
    })
    setTimeout(() => {
      this.$router.push('/demo-test/hide')
    }, 5000)
  },
  mounted () {
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.loading-show {
  color: #1c7ed6;
  font-size: 40px;
  text-align: center;
  .text {
    margin-top: 40vh;
    transform: translateY(-100%);
  }
  .tip-text {
    color: #c92a2a;
    font-size: 32px;
  }
}
</style>

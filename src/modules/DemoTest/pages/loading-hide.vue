<template>
  <div class="loading-hide">
    <p class="text">
      LOADING HIDE
    </p>
    <p class="tip-text">
      3秒后关闭loading
    </p>
  </div>
</template>

<script>
import { ServiceLoading } from '@/widgets/loading'
export default {
  mounted () {
    setTimeout(() => {
      ServiceLoading.hide()
    }, 3000)
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.loading-hide {
  color: #7048e8;
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

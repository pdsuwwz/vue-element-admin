<template>
  <div
    class="side-logo-container"
  >
    <router-link to="/">
      <img
        class="side-logo-img"
        src="@/assets/images/logo.png"
        alt="商标"
      >
      <h1 class="side-logo-title">
        {{ title }}
      </h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationSideLogo',
  data () {
    return {
      title: 'Element Admin'
    }
  }
}
</script>
<style lang="scss" scoped>
.side-logo-container {
  position: relative;
  height: 100%;
  white-space: nowrap;
  & > a {
    display: flex;
    align-items: center;
    height: 100%;
    color: #000;
    .side-logo-img {
      height: 32px;
    }
    .side-logo-title {
      height: 32px;
      line-height: 32px;
      font-size: 18px;
      font-weight: 600;
      margin-left: 12px;
    }
  }
}
</style>

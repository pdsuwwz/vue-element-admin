<template>
  <header
    class="navigation-navbar-header-container fixed-header"
  >
    <div class="navbar-header-box">
      <NavigationSideLogo />
      <div style="flex: 1;" />
      <NavigationSideAction />
    </div>
  </header>
</template>

<script>
import NavigationSideLogo from '@/components/Navigation/Side/SideLogo'
import NavigationSideAction from '@/components/Navigation/Side/SideAction'

export default {
  name: 'NavigationNavBar',
  components: {
    NavigationSideLogo,
    NavigationSideAction
  }
}
</script>
<style lang="scss" scoped>
.navigation-navbar-header-container {
  height: 48px;
  line-height: 48px;
  &.fixed-header {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
  .navbar-header-box {
    display: flex;
    height: 100%;
    padding: 0 16px;
    background-color: #fff;
  }
}
</style>

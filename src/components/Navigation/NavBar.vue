<template>
  <div>
    <header
      class="navigation-navbar-header-container fixed-header"
    >
      <div class="navbar-header-box">
        <NavigationSideLogo />
        <div style="flex: 1;"></div>
        <NavigationSideAction />
      </div>
    </header>
  </div>
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
$headerHeight: 48px;
.navigation-navbar-header-container {
  height: $headerHeight;
  line-height: $headerHeight;
  &.fixed-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
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

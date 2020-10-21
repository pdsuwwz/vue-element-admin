<template>
  <div class="navigation-page-header-container">
    <NavigationNavBreadcrumb />
    <div class="page-header-heading">
      <h1>{{ $route.name }}</h1>
    </div>
  </div>
</template>

<script>
import NavigationNavBreadcrumb from '@/components/Navigation/NavBreadcrumb'

export default {
  name: 'NavigationPageHeader',
  components: {
    NavigationNavBreadcrumb
  }
}
</script>

<style lang="scss" scoped>
.navigation-page-header-container {
  padding: 16px 24px;
  background-color: #fff;
  .page-header-heading {
    h1 {
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>

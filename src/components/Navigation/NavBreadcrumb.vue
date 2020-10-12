<template>
  <div class="navigation-nav-breadcrumb-container">
    <el-breadcrumb separator="/">
      <transition-group
        name="breadcrumb"
        mode="in-out"
      >
        <el-breadcrumb-item
          v-for="(route, index) in getRouteList"
          :key="route.path"
          class="nav-breadcrumb-item"
        >
          <span
            v-if="index === getRouteList.length - 1"
            class="breadcrumb-route-text"
          >{{ route.name }}</span>
          <a
            v-else
            class="breadcrumb-route-link"
            @click.prevent="handleLink(route)"
          >{{ route.name }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>

export default {
  name: 'NavigationNavBreadcrumb',
  computed: {
    getRouteList () {
      return this.$route.matched
    }
  },
  methods: {
    handleLink (route) {
      this.$router.push({
        path: route.path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-nav-breadcrumb-container {
  padding-bottom: 10px;
  .nav-breadcrumb-item {
    transition: all .5s;
    .breadcrumb-route-text {
      color: rgba(0, 0, 0, .45);
    }
    .breadcrumb-route-link {
      font-weight: 400;
    }
  }
}

// breadcrumb transition

.breadcrumb-enter,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translate(20px);
}
.breadcrumb-leave-active {
  position: absolute;
}
</style>

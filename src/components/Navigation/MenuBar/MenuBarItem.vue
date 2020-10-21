<template>
  <div
    v-if="!routeItem.hiddenMenu"
    class="menu-bar-item-container"
  >
    <el-submenu
      v-if="getRouteItemList"
      :index="rootPath"
      :class="{
        'submenu-active': isActiveRootRoute
      }"
      popper-append-to-body
    >
      <NavigationMenuBarItem
        v-for="(route, index) in getRouteItemList"
        :key="index"
        :route-item="route"
        :root-path="getJoinPath(route.path)"
      />
      <template slot="title">
        <i
          v-if="isFontAwesome"
          class="menu-font-awesome-icon"
        >
          <font-awesome-icon
            :icon="routeItem.icon"
          />
        </i>
        <i
          v-else
          :class="routeItem.icon"
        />
        <span slot="title">{{ routeItem.name }}</span>
      </template>
    </el-submenu>

    <template v-else-if="isOnlyRoute">
      <el-menu-item :index="rootPath">
        <i
          v-if="isFontAwesome"
          class="menu-font-awesome-icon"
        >
          <font-awesome-icon
            :icon="routeItem.icon"
          />
        </i>
        <i
          v-else
          :class="routeItem.icon"
        />
        <span slot="title">{{ routeItem.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'NavigationMenuBarItem',
  props: {
    routeItem: {
      type: Object,
      default () {
        return {}
      }
    },
    rootPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    isOnlyRoute () {
      const blackList = ['/', '*']
      return !this.routeItem.children &&
        !this.routeItem.redirect &&
        !blackList.includes(this.routeItem.path)
    },
    isFontAwesome () {
      return this.routeItem.icon && !this.routeItem.icon.startsWith('el-')
    },
    getRouteItemList () {
      return this.routeItem.children
    },
    getCurrentRoute () {
      return this.$route.path
    },
    isActiveRootRoute () {
      return this.getCurrentRoute.includes(this.rootPath)
    }
  },
  methods: {
    getJoinPath (targetPath) {
      return path.join(this.rootPath, targetPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-bar-item-container {
  .menu-font-awesome-icon {
    display: inline-block;
    width: 24px;
    margin-right: 5px;
    line-height: 1;
    font-size: 16px;
    text-align: center;
    vertical-align: middle;
  }
  /deep/ .el-submenu.submenu-active {
    & > .el-submenu__title,
    .el-icon-location,
    .menu-font-awesome-icon {
      color: $--color-primary;
    }
  }
}
</style>

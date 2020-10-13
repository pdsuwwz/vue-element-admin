<template>
  <div class="menu-bar-item-container">
    <el-submenu
      v-if="routeItem.children"
      :index="rootPath"
      popper-append-to-body
    >
      <NavigationMenuBarItem
        v-for="(route, index) in routeItem.children"
        :key="index"
        :route-item="route"
        :root-path="getJoinPath(route.path)"
      />
      <template slot="title">
        <!-- TODO: icon 配置 -->
        <i class="el-icon-location" />
        <span slot="title">{{ routeItem.name }}</span>
      </template>
    </el-submenu>
    <template v-else-if="!routeItem.children && !routeItem.redirect">
      <el-menu-item :index="rootPath">
        <!-- TODO: icon 配置 -->
        <i class="el-icon-setting" />
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
  methods: {
    getJoinPath (targetPath) {
      return path.join(this.rootPath, targetPath)
    }
  }
}
</script>
<style lang="scss">

</style>

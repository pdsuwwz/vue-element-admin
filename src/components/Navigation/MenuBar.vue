<template>
  <aside class="navigation-menubar-aside-container fixed-aside">
    <el-menu
      default-active="1-4-1"
      class="menubar-menu-list"
      :collapse="collapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location" />
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">
            选项1
          </el-menu-item>
          <el-menu-item index="1-2">
            选项2
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">
            选项3
          </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">
            选项1
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu" />
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item
        index="3"
        disabled
      >
        <i class="el-icon-document" />
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting" />
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location" />
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="5-1">
            选项1
          </el-menu-item>
          <el-menu-item index="5-2">
            选项2
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="5-3">
            选项3
          </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="5-4">
          <span slot="title">选项4</span>
          <el-menu-item index="5-4-1">
            选项1
          </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </aside>
</template>

<script>
export default {
  name: 'NavigationMenuBar',
  data () {
    return {
      collapse: false
    }
  }
}
</script>
<style lang="scss" scoped>
.navigation-menubar-aside-container {
  display: flex;
  flex-direction: column;
  width: 210px;
  padding-top: 48px;
  color: #000;
  background-color: #fff;
  &.fixed-aside {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .menubar-menu-list {
    flex: 1;
    overflow: hidden auto;
    // 滚动条样式
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,.12);
      border-radius: 3px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0,0,0,.06);
      border-radius: 3px;
    }
  }
}
</style>

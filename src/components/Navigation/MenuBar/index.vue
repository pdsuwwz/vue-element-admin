<template>
  <div>
    <!-- menubar 占位符 -->
    <div
      class="aside-placeholder"
      :class="{
        collapse: isCollapse
      }"
    ></div>
    <aside
      class="navigation-menubar-aside-container fixed-aside"
      :class="{
        collapse: isCollapse
      }"
    >
      <el-menu
        :default-active="getCurrentRoute"
        class="menubar-menu-list"
        :collapse="isCollapse"
        :collapse-transition="false"
        @select="handleMenuSelect"
      >
        <NavigationMenuBarItem
          v-for="(route, index) in getRoutes"
          :key="index"
          :route-item="route"
          :root-path="route.path"
        />
      </el-menu>
      <div
        class="collapse-btn-box"
        @click="toggleCollapse()"
      >
        <i
          class="btn-icon"
          :class="{
            'el-icon-s-fold': !isCollapse,
            'el-icon-s-unfold': isCollapse
          }"
        ></i>
      </div>
    </aside>
  </div>
</template>

<script>

import NavigationMenuBarItem from '@/components/Navigation/MenuBar/MenuBarItem'

import ElementVariables from '@/styles/element-variables.scss'

export default {
  name: 'NavigationMenuBar',
  components: {
    NavigationMenuBarItem
  },
  data () {
    return {
      isCollapse: localStorage.getItem('menu-is-collapse') === '1'
    }
  },
  computed: {
    getRoutes () {
      return this.$router.options.routes
    },
    getCurrentRoute () {
      return this.$route.path
    },
    getActiveTextColor () {
      return ElementVariables.colorPrimary
    }
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
      localStorage.setItem('menu-is-collapse', this.isCollapse ? '1' : '0')
    },
    handleMenuSelect (path) {
      if (this.getCurrentRoute === path) return
      this.$router.push({
        path
      })
    }
  }
}
</script>
<style lang="scss" scoped>
$menuNormalWidth: 210px;
$menuCollapseWidth: 64px;

.aside-placeholder {
  min-width: $menuNormalWidth;
  background: transparent;
  transition: all .28s;
  &.collapse {
    min-width: $menuCollapseWidth + 1;
  }
}
.navigation-menubar-aside-container {
  display: flex;
  flex-direction: column;
  width: $menuNormalWidth;
  padding-top: 48px;
  color: #000;
  transition: width .28s;
  background-color: #fff;
  border-right: 1px solid #f0f2f5;
  box-shadow: 2px 0 8px 0 rgba(29,35,41,.05);
  &.collapse {
    width: $menuCollapseWidth;
  }
  &.fixed-aside {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .collapse-btn-box {
    height: 48px;
    margin-top: 4px;
    border-top: 1px solid #f0f0f0;
    text-align: center;
    cursor: pointer;
    .btn-icon {
      font-size: 20px;
      font-weight: normal;
      color: #5a5a5a;
      padding: 14px 0;
    }
  }
  .menubar-menu-list {
    flex: 1;
    margin-top: 4px;
    border: none;
    overflow: hidden auto;

    // 修复折叠后文字无法隐藏的 bug
    /deep/ .el-submenu {
      & > .el-submenu__title {
        & > span, .el-submenu__icon-arrow {
          opacity: 0;
          animation: delayShowCollapse .5s ease-in-out forwards;
        }
      }
    }
    /deep/ &.el-menu--collapse {
      .el-submenu {
        & > .el-submenu__title {
          & > span, .el-submenu__icon-arrow {
            display: none;
          }
        }
      }
    }
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

@keyframes delayShowCollapse {
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

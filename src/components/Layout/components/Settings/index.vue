<template>
  <div class="right-panel">
    <transition name="setting-icon">
      <el-button
        v-if="!isSetting"
        type="primary"
        class="wrap-settings"
        @click="handleDrawer()"
      >
        <i class="el-icon-setting"></i>
      </el-button>
    </transition>
    <el-drawer
      title="主题配置"
      size="22%"
      :visible="isSetting"
      @close="handleDrawer()"
    >
      <div class="wrap-slot">
        <div
          v-for="(slotItem, slotIndex) in slotList"
          :key="slotIndex"
          class="slot-item"
        >
          <div class="slot-title">
            {{ slotItem.title }}
          </div>
          <component
            :is="slotItem.component"
          />
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import ThemePocker from '@/components/ThemePicker'
export default {
  name: 'RightPanel',
  components: {
    ThemePocker
  },
  data () {
    return {
      isSetting: false,
      isDrawer: true,
      slotList: [
        {
          title: '主题色',
          component: 'ThemePocker'
        }
      ]
    }
  },
  methods: {
    handleDrawer () {
      this.isSetting = !this.isSetting
    }
  }
}
</script>

<style scoped lang="scss">
.right-panel {
  .setting-icon-enter-active {
    transition: opacity .5s .1s;
  }
  .setting-icon-enter, .setting-icon-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .wrap-settings {
    width: 45px;
    height: 45px;
    position: fixed;
    right: 0px;
    top: 50%;
    border-radius: 6px 0px 0px 6px;
    cursor: pointer;
    z-index: 99999;
    transform: translateY(-50%);
    padding: 0px;
    .el-icon-setting {
      font-size: 30px;
    }
  }
  /deep/ .wrap-slot {
    width: 100%;
    height: 100%;
    padding: 20px;
    .slot-item {
      display: flex;
      align-items: center;
      .slot-title {
        flex: 1;
      }
    }
  }
}
</style>

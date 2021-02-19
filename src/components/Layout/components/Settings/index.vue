<template>
  <div>
    <div
      v-if="!isSetting"
      class="wrap-settings"
      @click="handleDrawer()"
    >
      <i class="el-icon-setting"></i>
    </div>
    <el-drawer
      title="主题配置"
      size="22%"
      :append-to-body="true"
      :visible="isSetting"
    >
      <ThemePocker />
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
      isDrawer: true
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    handleDrawer () {
      this.isSetting = !this.isSetting
    }
  }
}
</script>

<style scoped lang="scss">
.wrap-settings {
  width: 45px;
  height: 45px;
  position: fixed;
  right: 0px;
  top: 50%;
  text-align: center;
  border-radius: 6px 0px 0px 6px;
  cursor: pointer;
  z-index: 99999;
  transform: translateY(-50%);
  background-color: $--color-primary;
  color: $--color-text-regular;
  .el-icon-setting {
    font-size: 30px;
  line-height: 45px;
  }
}
</style>

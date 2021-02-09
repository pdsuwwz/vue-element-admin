<template>
  <div class="wrap-dialog">
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
    >
      <div>
        <slot></slot>
      </div>
      <div slot="footer">
        <el-button @click="dialogVisibleHide">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="dialogVisibleHide"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    dialogVisible: {
      type: Boolean,
      deep: true,
      default: () => false
    },
    title: {
      type: String,
      deep: true,
      default: () => '图标'
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  beforeCreate () {
  },
  created () {
  },
  mounted () {
  },
  methods: {
    dialogVisibleHide () {
      this.$emit('dialogVisibleHide', false)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrap-dialog {

}
</style>

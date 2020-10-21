<template>
  <div class="charts-wrap">
    <el-tabs
      v-model="tabDefault"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="Echarts"
        name="echarts"
      >
        layout
      </el-tab-pane>
      <el-tab-pane
        label="D3"
        name="d3"
      >
        layout
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      tabDefault: 'echarts',
      tabList: []
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
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>

<template>
  <div class="charts-wrap">
    <el-tabs
      v-model="tabDefault"
    >
      <el-tab-pane
        v-for="(item, index) in tabList"
        :key="index"
        :label="item.label"
        :name="item.name"
      >
        <Layout :charts-data="echartsData[item.name]" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Layout from '@/modules/ChartsTest/components/layout/index.vue'
import chartsData from '@/modules/ChartsTest/data'
export default {
  components: {
    Layout
  },
  data () {
    return {
      tabDefault: 'echarts',
      tabList: [
        {
          label: 'Echarts',
          name: 'echarts'
        }, {
          label: 'D3',
          name: 'd3'
        }
      ]
    }
  },
  computed: {
    echartsData: () => {
      return chartsData
    }
  },
  watch: {},
  beforeCreate () {
  },
  created () {
  },
  mounted () {
    console.log(this.echartsData)
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.charts-wrap {
  box-sizing: border-box;
  padding: 16px 24px;
}
</style>

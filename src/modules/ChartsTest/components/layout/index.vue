<template>
  <div class="layout-wrap">
    <div class="wrap-flex">
      <div
        v-for="(item, index) in chartsData"
        :key="index"
        class="wrap-flex-item"
        @click="onClcikItem(item)"
      >
        <div class="wrap-img">
          <img
            :src="item.imgUrl"
            alt=""
          >
        </div>
        <div class="wrap-label">
          <h1 :title="item.name">
            {{ item.name }}
          </h1>
        </div>
      </div>
    </div>
    <Dialog
      :dialog-visible="DialogVisible"
      :title="DialogTitle"
      @dialogVisibleHide="dialogVisibleHide"
    >
      <template #default>
        <div id="echarts-container"></div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/modules/ChartsTest/components/dialog/index.vue'
import Echarts from 'echarts'
import echartsUtils from '@/modules/ChartsTest/utils/echarts'
export default {
  components: {
    Dialog
  },
  props: {
    chartsData: {
      type: Array,
      deep: true,
      default: () => {}
    }
  },
  data () {
    return {
      DialogVisible: false,
      DialogTitle: ''
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
    dialogVisibleHide (visible) {
      this.DialogVisible = visible
    },
    onClcikItem ({ data, name, type }) {
      this.DialogVisible = true
      this.DialogTitle = name
      this.$nextTick(() => {
        const dom = document.querySelector('#echarts-container')
        const echarts = Echarts.init(dom)
        echarts.clear()
        echarts.setOption(echartsUtils[type](data))
      })
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.layout-wrap {
  .wrap-flex {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .wrap-flex-item {
      width: 378px;
      height: 300px;
      box-sizing: border-box;
      border: 1px solid rgb(238, 238, 238);
      margin: 20px 12px;
      border-radius: 5px;
      transition: all .2s;
      box-shadow: 0px 0px 0px transparent;
      padding: 20px 12px;
      background-image: #fff;
      &:hover {
        border: 1px solid #ccc;
        box-shadow: 0px 0px 5px rgb(236, 236, 236);
        cursor: pointer;
      }
      .wrap-img {
          text-align: center;
        img {
          width: 294px;
        }
      }
      .wrap-label {
        height: 38px;
        line-height: 38px;
        h1 {
          width: 294px;
          font-size: 20px;
          margin: 0px auto;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
  /deep/ #echarts-container {
    width: 100%;
    height: 400px;
  }
}
</style>

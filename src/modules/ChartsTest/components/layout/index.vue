<template>
  <div class="layout-wrap">
    <div class="wrap-flex">
      <div
        v-for="(item, index) in chartsData"
        :key="index"
        class="wrap-flex-item"
        @click="onClcikItem(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    chartsData: {
      type: Array,
      deep: true,
      default: () => {},
      handler (val) {
        console.log(val)
      }
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
    onClcikItem (item) {
      console.log(item)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.layout-wrap {

}
</style>

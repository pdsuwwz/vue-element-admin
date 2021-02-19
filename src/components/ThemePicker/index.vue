<template>
  <el-color-picker
    v-model="theme"
    :predefine="predefine"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
  />
</template>

<script>
export default {
  name: '',
  data () {
    return {
      theme: '',
      predefine: ['#409EFF', '#11a983', '#13c2c2', '#f5222d']
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.theme-picker-dropdown {
  z-index: 99999 !important;
}
</style>

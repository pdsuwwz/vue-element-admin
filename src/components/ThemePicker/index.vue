<template>
  <el-color-picker
    v-model="theme"
    :predefine="predefine"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
    @change="change"
  />
</template>

<script>
export default {
  name: 'ThemePicker',
  data () {
    return {
      theme: '',
      predefine: ['#409EFF', '#11a983', '#13c2c2', '#f5222d']
    }
  },
  methods: {
    change (color) {
      this.$emit('change', color)
    }
  }
}
</script>

<style scoped lang="scss">
.theme-picker-dropdown {
  z-index: 99999 !important;
}
</style>

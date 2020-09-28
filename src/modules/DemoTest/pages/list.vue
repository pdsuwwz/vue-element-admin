<template>
  <div>
    <h1>list</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import DemoTestModule from '@/modules/DemoTest/store'

export default {
  name: 'Xx',
  computed: {
    ...mapGetters({
      demoList: 'DemoTest/demoList'
    })
  },
  async created () {
    await this.$store.dispatch(DemoTestModule.getAction('GetModuleTestList'))
    console.log(this.demoList.test)
  }
}

</script>

<style lang="scss" scoped>
</style>

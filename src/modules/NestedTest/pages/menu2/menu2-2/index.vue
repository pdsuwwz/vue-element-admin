<template>
  <div class="nested-child-container">
    Menu2-2
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'NestedMenu22'
}

</script>

<style lang="scss" scoped>
.nested-child-container {
  width: 260px;
  padding: 20px;
  border: 1px solid #000;
}
</style>

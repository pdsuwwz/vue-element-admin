<template>
  <div class="nested-container">
    Menu2-2-2
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'NestedMenu222'
}

</script>

<style lang="scss" scoped>
.nested-container {
  width: 220px;
  padding: 20px;
  border: 1px solid #000;
}
</style>

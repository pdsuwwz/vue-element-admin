<template>
  <div class="nested-container">
    Menu2-3
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'NestedMenu23'
}

</script>

<style lang="scss" scoped>
.nested-container {
  width: 260px;
  padding: 20px;
  border: 1px solid #000;
}
</style>

<template>
  <div class="nested-container">
    Menu2-2-1
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'NestedMenu221'
}

</script>

<style lang="scss" scoped>
.nested-container {
  width: 220px;
  padding: 20px;
  border: 1px solid #000;
}
</style>

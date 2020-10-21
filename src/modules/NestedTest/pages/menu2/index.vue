<template>
  <div class="nested-container">
    Menu2
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'NestedMenu2'
}

</script>

<style lang="scss" scoped>
.nested-container {
  width: 300px;
  padding: 20px;
  border: 1px solid #000;
}
</style>

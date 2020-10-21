<template>
  <div class="nested-container">
    Menu1
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'NestedMenu1'
}

</script>

<style lang="scss" scoped>
.nested-container {
  width: 300px;
  padding: 20px;
  border: 1px solid #000;
}
</style>

<template>
  <div class="side-action-container">
    <ul class="action-list">
      <li
        v-for="item in 3"
        :key="item"
        class="action-item"
      >
        Action {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationSideAction',
  data () {
    return {
      title: 'Vue element admin'
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
.side-action-container {
  position: relative;
  .action-list {
    display: flex;
    white-space: nowrap;
    .action-item {
      height: 100%;
      line-height: inherit;
      background-color: #eee;
      padding: 0 12px;
      margin-right: 5px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>

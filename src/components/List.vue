<template>
  <div class="list">
    <ul>
      <transition-group name="list">
        <li :key="item.id" v-for="item in items">
        <span :key="column"  v-for="column in columns">
          {{ column }}: {{ item.data[column] }}
        </span>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: Array
  },
  computed: {
    columns () {
      return this.$_.uniq(this.$_.flattenDeep(this.items.map(item => {
        return Object.keys(item.data)
      })))
    }
  }
}
</script>

<style scoped lang="scss">
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 0.15s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
</style>


<template>
  <div class="card-layout-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'CardLayout'
}
</script>

<style scoped lang="scss">
  .card-layout-container {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
</style>

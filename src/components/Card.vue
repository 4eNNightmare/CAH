<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped lang="scss">
.card {
  margin: 16px;
  height: 88px * 5;
  width: 63px * 5;
  padding: 16px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
  0 1px 1px 0px rgba(0, 0, 0, 0.14),
  0 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
}
</style>

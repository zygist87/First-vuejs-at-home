<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'FirstComponent',
  props: {
    age: 25
  }
}
</script>

<style lang="scss">
.button {
  background-color: orange;
  color: blue;
  width: 100px;
  height: 30px;
  border-radius: 6px;
  margin: 10px;
}
</style>

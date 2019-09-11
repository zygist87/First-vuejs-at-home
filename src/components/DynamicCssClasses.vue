<template>
  <div @click="light = !light" :class="['dark', {'dark--yellow':light}]">
    <h1>Ka tu?</h1>
  </div>
</template>

<script>
export default {
  name: "DynamicCssClasses",
  props: {
    light: {
      type: [Boolean, String],
      default: true
    }
  }
};
</script>

<style lang="scss">
.dark {
  width: 100vw;
  height: 20vh;
  color: red;
  background-color: blue;
  &--yellow {
    background-color: yellow;
  }
}
</style>

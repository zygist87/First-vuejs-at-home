<template>
  <div class="slots">
      <h1>Slots tutorial #27</h1>
      <slot name="start"/>
      <h3>Destymas</h3>
      <slot name="end"/>
      <div>
          <slot name="one"/>
          <slot name="two"/>
          <slot name="three"/>
      </div>
  </div>
</template>

<script>
export default {
name: 'Slots'
}
</script>

<style lang="scss">
.slots {
  width: 100vw;
  height: 70vh;
  background-color: red;
  color: black;
}
</style>
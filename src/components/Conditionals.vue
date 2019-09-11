<template>
<div class="conditionals">
    <h1 >Conditionals with v-if v-else-if v-show lesson #11. Differnce between v-if and v-show is that v-if pasalina pilnai p taga is DOM o v-show padaro display none</h1>
  <button @click="error = !error">Toggle error</button>
  <button @click="success = !success" >Toggle success</button>
  <!-- <p v-if="error">Hello world, my name is Zygimantas!</p>
    <p v-if="success">I am 32 years old!</p> -->
    <p v-if="error">Hello world, my name is Zygimantas!</p>
    <p v-else-if="success">I am 32 years old!</p>
  </div>
</template>

<script>
export default {
  name: 'Conditionals',
  data () {
    return {
      success: false,
      error: false
    }
  }
}
</script>

<style lang="scss">
.conditionals {
  width: 100vw;
  height: 40vh;
  background-color: lightblue;
  color: darkgreen;
}
</style>

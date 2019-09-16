<template>
  <form action class="userForm">
    <label for>What is your name</label>
    <input type="text" v-model="name" />
    <span>{{name}}</span>
    <label for>How old are you?</label>
    <input type="number" v-model="age" />
    <span>{{age}}</span>
  </form>
</template>

<script>
export default {
  name: 'FormTemplate',
}
</script>

<style lang="scss">
.userForm {
  background: grey;
  color: white;
  height: 20vh;
  margin-top: 20px;
  padding-top: 20px;
}
</style>

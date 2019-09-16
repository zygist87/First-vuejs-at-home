<template>
  <div class="event">
      <h1>Events (child to parent) tutorial #24</h1>
      <h5 @click="changeTitle">{{title}}</h5>
  </div>
</template>

<script>
export default {
name: 'Events',
props: {
    title: {
        type: String
    }
},
methods: {
    changeTitle() {
        this.$emit("changeTitle", "Pakeiciau pavadinima cha cha cha")
    }
}
}
</script>

<style lang="scss">
.event {
  width: 80vw;
  height: 20vh;
  background-color: yellow;
  color: darkblue;
  align-content: center;
}
</style>
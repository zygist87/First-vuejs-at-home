<template>
    <div>
        <h1 class="intro">Intro to Components and Referencing with $refs tutorial #15 - #16</h1>
        <input type="text" ref="input">
        <button @click="submit">Submit</button>
        <p>Statinis textas ir: {{output}}</p>
        <div ref="test">Hello</div>
    </div>
</template>

<script>
export default {
  name: 'IntroToComponents',
  data () {
    return {
      output: 'labytis'
    }
  },
  methods: {
    submit: function () {
      console.log(this.$refs)
      console.log(this.$refs.input.value)
      this.output = this.$refs.input.value
    }
  }
}
</script>

<style lang="scss">
.intro {
  width: 100vw;
  height: 10vh;
  background-color: darkcyan;
  color: lightgrey;
}
</style>

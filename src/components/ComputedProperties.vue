<template>
  <div class="computedProperties">
    <h1>Computed properties tutorial number #9</h1>
    <button @click="a++">Add to A</button>
    <button @click="b++">Add to B</button>
    <p>A is: {{a}}</p>
    <p>B is: {{b}}</p>
    <p>Age + A: {{addA}}</p>
    <p>Age + B: {{addB}}</p>
  </div>
</template>

<script>
export default {
  name: "ComputedProperties",
  data() {
    return {
      age: 20,
      a: 0,
      b: 0
    };
  },
  methods: {
    // addA: function() {
    //   return this.a + this.age;
    // },
    // addB: function() {
    //   return this.b + this.age;
    // }
  },
  computed: {
    addA: function() {
        console.log("A");
      return this.a + this.age;
    },
    addB: function() {
        console.log("B");
      return this.b + this.age;
    }
  }
};
</script>

<style lang="scss">
.computedProperties {
  background-color: lime;
  color: red;
}
</style>
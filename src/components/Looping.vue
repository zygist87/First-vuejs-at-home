<template>
    <div class="looping">
        <h1>Looping with v-for tutorial #12</h1>
        <ul>
            <li v-for="ch in chaa" :key="ch">{{ch}}</li>
        </ul>
        <ul>
            <li v-for="(ninja, index) in ninjas" :key="index"> {{index}} Name: {{ninja.name}} - Age: {{ninja.age}}</li>
        </ul>
        <template v-for="ninja in ninjas">
            <h3>{{ninja.name}}</h3>
            <p>{{ninja.age}}</p>
        </template>
        <template v-for="ninja in ninjas">
            <p v-for="(value, key) in ninja">
                {{key}} - {{value}}
            </p>
        </template>
    </div>
</template>
<script>
export default {
  name: 'Looping',
  // data: {
  //     cha: ["Tom", "John", "Marry", "Bruce"],
  //     ninjas: [
  //         {name: "Tomas", age: 25},
  //         {name: "Vaidas", age: 23},
  //         {name: "Ona", age: 55},
  //         ]
  // },
  data () {
    return {
      chaa: ['Tom', 'John', 'Marry', 'Bruce'],
      ninjas: [
        { name: 'Tomas', age: 25 },
        { name: 'Vaidas', age: 23 },
        { name: 'Ona', age: 55 }
      ]
    }
  }
}
</script>
<style lang="scss">
.looping {
  width: 100vw;
  height: 100vh;
  background-color: lightcoral;
  color: purple;
}
</style>

<template>
<div class="nesting" id="ninjas">
    <h1>Nesting Components tutorial #17 - #19, Components CSS #20</h1>
    <ul>
        <li v-for="(ninja, index) in ninjas" :key="index" @click="ninja.show = !ninja.show">
            <h2>{{ninja.name}}</h2>
            <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'NestingComponents',
  data () {
    return {
      ninjas: [
          {name: 'Zygis', speciality:'Vue Components', show: false},
          {name: 'Darius', speciality:'Tractor', show: false},
          {name: 'Tomas', speciality:'Car', show: false},
          {name: 'Ona', speciality:'Train', show: false},
          {name: 'Viktorija', speciality:'Bus', show: false},
          {name: 'Kazys', speciality:'Bike', show: false},
          ]
    }
  }
}
</script>

<style lang="scss">
.nesting {
  width: 100vw;
  height: 60vh;
  background-color: darkgoldenrod;
  color: lightseagreen;
}
</style>

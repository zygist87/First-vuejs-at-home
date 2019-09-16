<template>
  <div class="props">
      <h1>Props tutorial #22</h1>
      <ul>
        <li v-for="(ninja, index) in ninjas" @click="ninja.show = !ninja.show" :key="index">
            <h2>{{ninja.name}}</h2>
            <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
name: 'Props',
props: {
    ninjas: {
        type: Array,
        required: true
    }
},
data () {
    return {
      
    }
  }
}

</script>

<style lang="scss">
.props {
  width: 100vw;
  height: 60vh;
  background-color: lightskyblue;
  color: darkorchid;
}
</style>
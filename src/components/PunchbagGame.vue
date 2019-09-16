<template>
    <div>
        <h1>Punchbag game tutorial #13</h1>
        <!-- bag -->
        <div id="bag" v-bind:class="{burst: ended}">

        </div>
        <!-- health -->
        <div id="bag-health">
            <div v-bind:style="{width: health + '%'}"></div>
        </div>
        <!-- controls -->
        <div id="controls">
            <button @click="punch" v-show="!ended">Punch</button>
            <button @click="restart">Restart</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PunchbagGame',
  data () {
    return {
      health: 100,
      ended: false
    }
  },
  methods: {
    punch: function () {
      this.health -= 10
      if (this.health <= 0) {
        this.ended = true
      }
    },
    restart: function () {
      this.health = 100
      this.ended = false
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
#bag {
  width: 200px;
  height: 500px;
  margin: 0 auto;
  background: url(../images/full.png) center no-repeat;
  background-size: 80%;
}
#bag.burst {
  background: url(../images/broken.jpg) center no-repeat;
  background-size: 80%;
}
#bag-health {
  width: 200px;
  border: 2px solid darkgreen;
  margin: 0 auto 20px auto;
}
#bag-health div {
  height: 20px;
  background: crimson;
}
#controls {
  width: 120px;
  margin: 0 auto;
}
</style>

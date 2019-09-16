<template>
  <div class="primitive">
      <h1>Primitive and Reference types tutorial #23</h1>
      <p>Primitive types is String, Number, Boolean. Reference type is Array, Object. Tai reiskia, kad atnaujinus componente array arba object jis atsinaujins visur, o atnaujinus komponente zodi, skaiciu ar boolean jis atsinaujina tik tame komponente</p>
      <h5 @click="changeTitle">{{title}}</h5>
  </div>
</template>

<script>
export default {
name: 'PrimitiveReferenceTypes',
props: {
  title: {
    type: String
  }
},
methods: {
  changeTitle () {
    this.$emit("changeTitle", "Lopeta")
  }
}
}
</script>

<style lang="scss">
.primitive {
  width: 100vw;
  height: 20vh;
  background-color: lightpink;
  color: darkmagenta;
}
</style>
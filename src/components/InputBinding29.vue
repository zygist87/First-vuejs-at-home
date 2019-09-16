<template>
  <div class="inputs">
      <h1>Input binding tutorial #29</h1>
      <form action="">
          <label for="">Blog title</label>
          <input 
          type="text" 
          required
          v-model.lazy="blog.title">
          <label for="">Blog content</label>
          <textarea 
          name="" id="" cols="30" rows="2"
          v-model.lazy="blog.content"></textarea>
      </form>
      <div id="preview">
          <h3>Preview blog</h3>
          <p>preview blog title: {{blog.title}}</p>
          <p>Preview blog content:</p>
          <p>{{blog.content}}</p>
      </div>
  </div>
</template>

<script>
export default {
name: 'InputBinding29',
data () {
    return {
        blog: {
            title: '',
            content: '',
        }
         
    }
}
}
</script>

<style lang="scss">
.inputs {
  width: 100vw;
  height: 60vh;
  background-color: grey;
  color: black;
}
</style>
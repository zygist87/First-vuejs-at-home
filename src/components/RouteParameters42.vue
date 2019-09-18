<template>
  <div id="single-blog">
      <h1>Route parameters tutorial #42</h1>
      <h2>{{blog.title}}</h2>
      <article>{{blog.body}}</article>
  </div>
</template>

<script>
export default {
    // name: 'RouteParameters42',
    data () {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created () {
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data) {
            
            console.log(data)
            this.blog = data.body
        })
    }
}
</script>

<style>
</style>
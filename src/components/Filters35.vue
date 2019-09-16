<template>
  <div v-theme:column="'wide'">
      <h1>Filters tutorial #35</h1>
      <h1>There will be all blogs</h1>
      <div v-for="blog in blogs" :key="blog.id" class="single-blog">
          <h2 v-rainbow >{{blog.title | to-uppercase}}</h2>
        <article>{{blog.body | shorter}}</article>
      </div>
  </div>
</template>

<script>
export default {
name: 'Filters35',
data () {
    return {
        blogs: []
    }
},
created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
        this.blogs = data.body.slice(0, 10)
    })
}
}
</script>

<style>
</style>
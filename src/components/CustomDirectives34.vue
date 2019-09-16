<template>
  <div class="history" v-theme:column="'narrow'">
      <h1>Custom Directives tutorial #34</h1>
      <h1>There will be all blogs</h1>
      <div v-for="blog in blogs" :key="blog.id" class="single-blog">
          <h2 v-rainbow >{{blog.title}}</h2>
        <article>{{blog.body}}</article>
      </div>
  </div>
</template>

<script>
export default {
name: 'CustomDirectives34',
data () {
    return {
        blogs: []
    }
},
created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        console.log(data)
        this.blogs = data.body.slice(0, 10)
    })
}
}
</script>

<style lang="scss">
.history {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: lightgrey;
}
</style>
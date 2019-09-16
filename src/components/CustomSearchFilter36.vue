<template>
  <div>
      <h1>Custom Search Filter tutorial #36</h1>
      <h1>There will be example of custom search filter</h1>
      <input type="text" v-model="search" placeholder="Search blog">
      <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
          <h2 v-rainbow >{{blog.title | to-uppercase}}</h2>
        <article>{{blog.body | shorter}}</article>
      </div>
  </div>
</template>

<script>
export default {
name: 'CustomSearchFilter36',
data () {
    return {
        blogs: [],
        search: ''
    }
},
created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
        this.blogs = data.body.slice(0, 10)
    })
},
computed: {
    filteredBlogs: function() {
        return this.blogs.filter((blogg) => {
            return blogg.title.match(this.search)
        })
    }
}
}
</script>

<style>
</style>
<template>
  <div>
      <h1>Mixins tutorial #38</h1>
      <h1>List blog titles</h1>
      <input type="text" v-model="search" placeholder="Search blog">
      <div v-for="blog in filteredBlogsss" :key="blog.id" class="single-blog">
          <router-link :to="'/blog/' + blog.id"><h2>{{blog.title | to-uppercase}}</h2></router-link>
        
      </div>
  </div>
</template>

<script>
import search from "../mixins/search"
export default {
    name: 'Mixins38',
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
//computed: {
    //uzkomentavau cia, nes susikuriau tokia pat mixins folderyje tik su tycia pakeistu pavadinimu kad nereiketu ankstesnese paskaitose redaguoti visko
    // filteredBlogs: function() {
    //     return this.blogs.filter((blogg) => {
    //         return blogg.title.match(this.search)
    //     })
    // }
  //},
  mixins: [search]
}
</script>

<style>
</style>
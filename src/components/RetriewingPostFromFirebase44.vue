<template>
<div>
  <h1>Retriewing post from firebase tutorial #44</h1>
  <ul>
    <li v-for="single in blogs">
      <h2>{{single.author}}</h2>
    </li>
  </ul>
</div>
</template>

<script>
export default {
    name: 'RetriewingPostFromFirebase44',
    data () {
      return {
        blogs: []
      }
    },
    created () {
      this.$http.get('https://myfirstpersonalvuejs.firebaseio.com/posts.json').then(function(data) {
        return data.json();
      }).then(function(data) {
        const blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key])
        }
        this.blogs = blogsArray;
      })
    }
}
</script>

<style>
</style>
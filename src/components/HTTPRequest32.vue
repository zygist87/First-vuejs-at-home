<template>
  <div class="databasee">
      <h1>HTTP Request tutorial #32  darysim ne su jquery ar fetchAPI, bet su vue resource plugin is dokumentacijos</h1>
      <form v-if="!submitted">
          <label for="">Blog title</label>
          <input 
          type="text" 
          required
          v-model.lazy="blog.title">
          <label for="">Blog content</label>
          <textarea 
          name="" cols="30" rows="2"
          v-model.lazy="blog.content"></textarea>
          <div>
          <label for="">Car</label>
          <input type="checkbox" value="car" v-model="blog.categories">
          <label for="">Truck</label>
          <input type="checkbox" value="truck" v-model="blog.categories">
          <label for="">Bike</label>
          <input type="checkbox" value="bike" v-model="blog.categories">
          <label for="">Plane</label>
          <input type="checkbox" value="plane" v-model="blog.categories">
          <label for="">Author: </label>
          <select name="" id="" v-model="blog.author">
              <option v-for="author in authors" :key="author">{{author}}</option>
          </select>
      </div>
      <button @click.prevent="postBlog">POST blog with Vue Resource plugin</button>
      </form>
      <div v-if="submitted">
          <h1>Thanks for using our app!!!</h1>
      </div>
      <div id="preview">
          <h3>Preview blog</h3>
          <p>preview blog title: {{blog.title}}</p>
          <p>Preview blog content:</p>
          <p>{{blog.content}}</p>
          <p>Blog categories</p>
          <ul>
              <li v-for="category in blog.categories" :key="category">{{category}}</li>
          </ul>
          <p>{{blog.author}}</p>
      </div>
  </div>
</template>

<script>
export default {
name: 'HTTPRequest32',
data () {
    return {
        blog: {
            title: '',
            content: '',
            categories: [],
            author: ''
        },
        authors: ["Tomas", "Darius", "Ona", "Maryte"],
        submitted: false,
    }
},
methods: {
    postBlog: function() {
        this.$http.post('https://jsonplaceholder.typicode.com/posts', {
            title: this.blog.name,
            body: this.blog.content,
            userID: 1
        }).then(function(data) {
            console.log(data)
            this.submitted = true
        })
    }
}
}
</script>

<style lang="scss">
.databasee {
  width: 100vw;
  height: 80vh;
  background-color: coral;
  color: forestgreen;
}
</style>
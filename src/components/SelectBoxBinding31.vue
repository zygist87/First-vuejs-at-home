<template>
    <div class="select">
        <h1>Select box binding tutorial #31</h1>
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
      </form>
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
name: 'SelectBoxBinding31',
data () {
    return {
        blog: {
            title: '',
            content: '',
            categories: [],
            author: ''
        },
        authors: ["Tomas", "Darius", "Ona", "Maryte"]
    }
}
}
</script>

<style lang="scss">
.select {
  width: 100vw;
  height: 50vh;
  background-color: lime;
  color: purple;
}
</style>
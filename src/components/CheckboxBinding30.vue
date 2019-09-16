<template>
  <div class="checkboxx">
      <h1>Checkbox binding (forms) tutorial #30</h1>
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
      </div>
      
  </div>
</template>

<script>
export default {
name: 'CheckboxBinding30',
data () {
    return {
        blog: {
            title: '',
            content: '',
            categories: [],
        }
    }
}
}
</script>

<style lang="scss">
.checkboxx {
  width: 100vw;
  height: 60vh;
  background-color: brown;
  color: white;
}
</style>
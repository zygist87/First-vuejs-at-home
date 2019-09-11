<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Labas</h1>
    <div>
      <FirstComponent v-on:click="time++">Add 1</FirstComponent>
      <FirstComponent>Decrement 1</FirstComponent>
    </div>
    <div>
      <FirstComponent>Add 10</FirstComponent>
      <FirstComponent>Decrement 10</FirstComponent>
      <button @click="time++">pridedu 1</button>
      <p>My age is {{time}}</p>

      <h1>Events tutorial number #7</h1>
      <label for>Name</label>
      <input type="text" v-on:keyup.enter="logName" />
      <label for>Age</label>
      <input type="number" v-on:keyup.enter="logAge" />

      <h1>Two-way data binding tutorial number #8</h1>
      <label for>Name</label>
      <input type="text" v-model="name" />
      <span>{{name}}</span>
      <label for>Age</label>
      <input type="number" v-model="age" />
      <span>{{age}}</span>
      <FormTemplate />
      <ComputedProperties />
      <DynamicCssClasses />
      <DynamicCssClasses />
      <Conditionals/>
      <Looping/>
      <PunchbagGame/>
      <MultipleVueInstances/>
      <IntroToComponents/>
      <NestingComponents/>
    </div>
  </div>
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue";
import FormTemplate from "@/components/FormTemplate";
import ComputedProperties from "@/components/ComputedProperties";
import DynamicCssClasses from "@/components/DynamicCssClasses";
import Conditionals from "@/components/Conditionals";
import Looping from "@/components/Looping";
import PunchbagGame from "@/components/PunchbagGame";
import MultipleVueInstances from "@/components/MultipleVueInstances";
import IntroToComponents from "@/components/IntroToComponents";
import NestingComponents from "@/components/NestingComponents";

export default {
  name: "app",
  components: {
    FirstComponent,
    FormTemplate,
    ComputedProperties,
    DynamicCssClasses,
    Conditionals,
    Looping,
    PunchbagGame,
    MultipleVueInstances,
    IntroToComponents,
    NestingComponents
  },
  data() {
    return {
      name: "",
      age: "",
      time: 15
    };
  },

  methods: {
    logName: function() {
      console.log("You have entered your name");
    },
    logAge: function() {
      console.log("You have entered your age");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

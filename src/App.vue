<template>
  <div id="app">
    <AddingRouterLinks41/>
    <router-view></router-view>
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
      <Props :ninjas="ninjas"/>
      <PrimitiveReferenceTypes :title="title" @changeTitle="updateTitle($event)"/>
      <Events :title="title" @changeTitle="updateTitle($event)"/>
      <EventBus/>
      <Slots>
        <h2 slot="start">Pradzia</h2>
        <h4 slot="end">Pabaiga</h4>
      </Slots>
      <Slots>
        <div slot="one">
          <h3>Tai yra pirmas slotas</h3>
          <h4>bla bla bla</h4>
        </div>
        <div slot="two">
          <input type="text" placeholder="text" required>
          <input type="password" placeholder="password" required>
        </div>
        <div slot="three">
          <button @click="inputSubmit">Submit</button>
        </div>
      </Slots>
      <DynamicComponents/>
      <button @click="component ='PunchbagGame'">Show Punch Bag Game</button>
      
      <button @click="component ='FormTemplate'">Show FormTemplate</button>
      <keep-alive>
      <component :is="component"></component>
      </keep-alive>
      <InputBinding29/>
      <CheckboxBinding30/>
      <SelectBoxBinding31/>
      <HTTPRequest32/>
      <GETRequest33/>
      <CustomDirectives34/>
      <Filters35/>
      <CustomSearchFilter36/>
      <RegisteringLocally37/>
      <Mixins38/>
      <PostingToFirebase43/>
      <Labas/>
    </div>
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import FormTemplate from '@/components/FormTemplate'
import ComputedProperties from '@/components/ComputedProperties'
import DynamicCssClasses from '@/components/DynamicCssClasses'
import Conditionals from '@/components/Conditionals'
import Looping from '@/components/Looping'
import PunchbagGame from '@/components/PunchbagGame'
import MultipleVueInstances from '@/components/MultipleVueInstances'
import IntroToComponents from '@/components/IntroToComponents'
import NestingComponents from '@/components/NestingComponents'
import Props from "@/components/Props"
import PrimitiveReferenceTypes from "@/components/PrimitiveReferenceTypes"
import Events from "@/components/Events"
import EventBus from "@/components/EventBus"
import Slots from "@/components/Slots"
import DynamicComponents from "@/components/DynamicComponents"
import InputBinding29 from "@/components/InputBinding29"
import CheckboxBinding30 from "@/components/CheckboxBinding30"
import SelectBoxBinding31 from "@/components/SelectBoxBinding31"
import HTTPRequest32 from "@/components/HTTPRequest32"
import GETRequest33 from "@/components/GETRequest33"
import CustomDirectives34 from "@/components/CustomDirectives34"
import Filters35 from "@/components/Filters35"
import CustomSearchFilter36 from "@/components/CustomSearchFilter36"
import RegisteringLocally37 from "@/components/RegisteringLocally37"
import Mixins38 from "@/components/Mixins38"
import AddingRouterLinks41 from "@/components/AddingRouterLinks41"
import PostingToFirebase43 from "@/components/PostingToFirebase43"
import Labas from "@/components/Labas"

export default {
  name: 'app',
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
    NestingComponents,
    Props,
    PrimitiveReferenceTypes,
    Events,
    EventBus,
    Slots,
    DynamicComponents,
    InputBinding29,
    CheckboxBinding30,
    SelectBoxBinding31,
    HTTPRequest32,
    GETRequest33,
    CustomDirectives34,
    Filters35,
    CustomSearchFilter36,
    RegisteringLocally37,
    Mixins38,
    AddingRouterLinks41,
    PostingToFirebase43,
    Labas
  },
  data () {
    return {
      name: '',
      age: '',
      time: 15,
      ninjas: [
        { name: 'Zygis', speciality: 'Vue Components', show: false },
        { name: 'Darius', speciality: 'Tractor', show: false },
        { name: 'Tomas', speciality: 'Car', show: false },
        { name: 'Ona', speciality: 'Train', show: false },
        { name: 'Viktorija', speciality: 'Bus', show: false },
        { name: 'Kazys', speciality: 'Bike', show: false }
      ],
      title: "Primityvus pavadinimas #24 tutorialui",
      component: "FormTemplate",
    }
  },

  methods: {
    logName: function () {
      console.log('You have entered your name')
    },
    logAge: function () {
      console.log('You have entered your age')
    },
    updateTitle (newTitle) {
      this.title = newTitle
    },
    inputSubmit () {
      console.log("paspaudziau formos submit mygtuka");
    }
  }
}
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

<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"/> -->
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <faculty/>
    <test/> -->
    <!-- <Employee/> -->
    <penpraa/>
  </div>
</template>

<script>
import Vue from "vue";
// import HelloWorld from './components/HelloWorld.vue';
// import faculty from './components/faculty.vue';
// import test from './components/test.vue';
// import Employee from './components/Employee.vue';
//Bootstarp
import {BootstrapVue , IconsPlugin} from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Penpraa from './components/penpraa.vue';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // faculty,
    // test,
    // Employee
     Penpraa
    }
  };
   

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
    <div>
        <h1>
            {{ counter3 }}
            {{ counter3 }}
            Component1
        </h1>
        <Component2/>
    </div>
  </template>
  
  <script >
  import Component2 from './Component2.vue';

  import { mapState } from 'vuex';

  export default {

    name: "App",
    components:{
        Component2
    },
    computed:{
        ...mapState(["counter","counter3"])
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
  
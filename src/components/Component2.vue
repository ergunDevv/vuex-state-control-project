<template>
    <div>
        <h1>
            Component2
        </h1>
        <Component3 />
    </div>
  </template>
  
  <script >
    import Component3 from './Component3.vue';
  export default {
    name: "Component3Co",
    components:{
        Component3
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
  
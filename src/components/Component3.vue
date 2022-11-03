<template>
    <div>
        <h1>
            Component3
        </h1>
        <Component4/>
    </div>
  </template>
  
  <script >
    import Component4 from './Component4.vue';
  export default {
    name: "Component3Co",
    components:{
        Component4
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
  
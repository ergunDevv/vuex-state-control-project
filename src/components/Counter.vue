<template>
  <div>
    <h1>Vuex Counter</h1>
    <h1 class="counter">0</h1>
    <button>-</button>
    <input type="number">
    <button>+</button>
  </div>
</template>
  
  <script >
export default {
  name: "CounterCO",
};
</script>
  

<style scoped>
    .counter {
        font-size: 5rem;
    }
    button {
        border-radius: 100%;
        border: none;
        width: 2rem;
        height: 2rem;
        font-weight: 700;
        cursor: pointer;
    }
    input {
        padding: 0.4rem;
        margin: 0 0.5rem;
        text-align: center;
    }
    .btn {
        border-radius: 0.5rem;
        width: auto;
        background: #41B983;
        margin-top: 1rem;
        color: white;
        cursor: pointer;
    }
</style>
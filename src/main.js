import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 0,
      // counter2: 333,
      // counter3: 444,
    };
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
    },
    subtractFromCounter(state, payload) {
      state.counter = state.counter - payload;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import axios from "axios";

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
  actions:{
        async addRandomNumber(context) {
            let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
            context.commit("addToCounter" , data.data)
        }
  }

});

const app = createApp(App);

app.use(store);

app.mount("#app");

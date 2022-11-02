import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'

const store =createStore({
    state(){
        return{
            counter: 222,
            counter1: 111,
            counter2: 333,
            counter3: 444,
        }
    }
})

const app = createApp(App);

app.use(store);

app.mount('#app')

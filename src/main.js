import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import Transitions from "vue2-transitions";
Vue.use(Transitions);
axios.defaults.baseURL = "http://127.0.0.1:8000";

Vue.config.productionTip = false;

let prueba = process.env.DEBUG;
console.log(process.env);
console.log(prueba);
new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");

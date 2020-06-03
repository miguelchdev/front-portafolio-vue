import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import Transitions from "vue2-transitions";
Vue.use(Transitions);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.config.productionTip = true;

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");

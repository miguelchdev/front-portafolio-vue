import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import Transitions from "vue2-transitions";
import i18n from "./i18n";
Vue.use(Transitions);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.config.productionTip = process.env.VUE_APP_PRODUCTION === "true";

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: (h) => h(App),
}).$mount("#app");

let language;
if (window.navigator.languages) {
    language = window.navigator.languages[0];
} else {
    language = window.navigator.userLanguage || window.navigator.language;
}
let userLanguage = (
    (navigator.languages && navigator.languages[0]) ||
    ""
).substr(0, 2);
i18n.locale = userLanguage;

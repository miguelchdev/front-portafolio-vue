import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light:   {
        primary: '#7E7E7E',
        secondary: '#00bcd4',
        accent: '#607d8b',
        error: '#795548',
        warning: '#ff5722',
        info: '#F57F17',
        },
    },
  },
});

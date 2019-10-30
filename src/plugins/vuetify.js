import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        light:'#fafafa',
        lightText: '#717171',
        lightHeading: '#323232',
        dark:'#1a1a1a',
        darkHeading:'#ffffff',
        darkText:'#d7d7d7',
        gray:'#262626'
      },
    },
  }
});

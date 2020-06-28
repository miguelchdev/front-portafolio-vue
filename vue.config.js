module.exports = {
    transpileDependencies: ["vuetify"],

    configureWebpack: {
        devtool: "source-map",
    },

    lintOnSave: true,

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
};

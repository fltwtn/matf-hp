module.exports = {
  devServer: {
    host: "localhost",
    port: 8081,
    disableHostCheck: true,
  },
  transpileDependencies: ["vuetify"],
  publicPath: "/matf-hp",
  outputDir: "docs",
  filenameHashing: false,
  productionSourceMap: false,
};

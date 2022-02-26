module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "MyNotion like memo",
    }
  },
  devServer: {
    port: 8083,
    disableHostCheck: true,
    host: 'localhost'
  }
};

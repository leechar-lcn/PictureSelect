const { override, addLessLoader, fixBabelImports } = require("customize-cra");

module.exports = override(
  addLessLoader(),
  fixBabelImports("antd", {
    libraryDirectory: "es",
    style: "css",
  })
);

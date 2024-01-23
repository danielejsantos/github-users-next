const webpackDevServer = require("@cypress/webpack-dev-server");
const babelPreprocessor = require("@cypress/react/plugins/babel");

module.exports = (on: any, config: any) => {
  webpackDevServer(on, config);
  on("file:preprocessor", babelPreprocessor);

  return {
    ...config,
    fileServerFolder: "../",
  };
};

// module.exports = (on: any, config: any) => {
//   require("@cypress/webpack-dev-server")(on, config);
//   return config;
// };

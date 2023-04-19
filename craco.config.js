const cracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: "./src",
        source: "jsconfig.path.json",
      }
    }
  ]
};




// const path = require("path");

// const resolvePath = p => path.join(path.resolve(__dirname, p))

// module.exports = {
//   webpack: {
//     resolve: {
//       alias: {
//         "@components": resolvePath(__dirname, "./src/components"),
//         "@actions": resolvePath(__dirname, "src/actions"),
//         "@const": resolvePath(__dirname, "src/const"),
//         "@reducers": resolvePath(__dirname, "./src/reducers"),
//         "@services": resolvePath(__dirname, "./src/services"),
//         "@errorBoundary": resolvePath(__dirname, "./src/errorBoundary"),
//         "@sagas": resolvePath(__dirname, "src/sagas")
//       },
//     }
//   }
// } 
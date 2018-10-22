require('ignore-styles');

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1"
        },
        useBuiltIns: "usage"
      }
    ],
    "@babel/react"
  ],
  plugins: [
    "babel-plugin-styled-components",
    "@babel/plugin-syntax-dynamic-import",
    "dynamic-import-node-babel-7",
    "react-loadable/babel"
  ]
});

require('./index');

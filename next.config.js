const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");

const nextModeBabelPlugin = require("next-babel-conditional-ssg-ssr");
const webpack = require("webpack");
const presets = ["next/babel"];
const plugins = [nextModeBabelPlugin("ssr")];
const { i18n } = require("./next-i18next.config");

module.exports = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:oms*",
  //       destination: "https://omsecurity.kr/:oms*",
  //     },
  //   ];
  // }, 
  ...withCSS(
    withLess(
      withImages(
        withSass({
          i18n,
          generateBuildId: async () => {
            if (process.env.BUILD_ID) {
              return process.env.BUILD_ID;
            } else {
              return `${new Date().getTime()}`;
            }
          },
          distDir: "_next",
          webpack: function (config, { isServer }) {
            config.module.rules.push({
              test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
              use: {
                loader: "url-loader",
                options: {
                  limit: 100000,
                  name: "[name].[ext]",
                },
              },
            });
            if (!isServer) {
              config.node = {
                fs: 'empty',
                "react-draft-wysiwyg": "empty",
              };
            }
            const env = Object.keys(process.env).reduce((acc, curr) => {
              acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
              return acc;
            }, {});
            config.plugins.push(new webpack.DefinePlugin(env));
            return config;
          },
          presets,
          plugins,
        })
      )
    )
  )
};

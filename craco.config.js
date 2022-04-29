/* craco.config.js */
const path = require(`path`)
const CracoLessPlugin = require("craco-less")
/**
 * 按照 配置主题 的要求，自定义主题需要用到类似 less-loader 提供的 less 变量覆盖功能。
 * 我们可以引入 craco-less 来帮助加载 less 样式和修改变量。
 * 更多主题变量:
 * https://ant.design/docs/react/customize-theme-cn
 */
module.exports = {
  alias: {
    "@": path.resolve(__dirname, "src/"),
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}

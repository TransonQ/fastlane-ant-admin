/* craco.config.js */
const path = require(`path`);
const CracoLessPlugin = require("craco-less");
/**
 * 按照 配置主题 的要求，自定义主题需要用到类似 less-loader 提供的 less 变量覆盖功能。
 * 我们可以引入 craco-less 来帮助加载 less 样式和修改变量。
 * 更多主题变量:
 * https://ant.design/docs/react/customize-theme-cn
 * 如下modifyVars 打开注释后, 重启服务, 主题色(eg: 侧边栏按钮色,按钮悬停颜色等等)变成绿色就表示覆盖成功了
 */
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
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
};

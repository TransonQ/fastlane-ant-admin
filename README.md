# antd 4.20 + react-router-dom V6 + react18

## icon

> public 中的 favicon.ico 默认作为页签图标, 自定义做法是将项目图片转成 favicon.icon

## why less ?

### Ant Design 的样式变量

> antd 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。
> 以下是一些最常用的通用变量，所有样式变量可以在 [主题变量](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) 找到。

### 定制方式

> 原理上是使用 less 提供的 modifyVars 的方式进行覆盖变量，可以在本地运行 [例子](https://github.com/ant-design/create-react-app-antd) 查看定制效果。下面将针对不同的场景提供一些常用的定制方式。

## 配置项

> craco 配置了 src 根路径: @/ 就是 src/

## 规范插件 vscode 务必安装

1. sort-imports(下载安装即可,默认配置)
2. prettier

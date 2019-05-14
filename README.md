## wepy脚手架使用指南

### 一、wepy初始
##### 全局安装命令行工具
> cnpm install wepy-cli -g
##### 依赖安装
> cnpm install
##### 项目目录结构
```
├── dist                   小程序运行代码目录
├── node_modules
├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
|   ├── api                api接口地址
|   ├── env                环境配置
|   ├── common             公共方法
|   ├── components         WePY组件目录
|   |   ├── com_a.wpy      可复用的WePY组件a
|   |   └── com_b.wpy      可复用的WePY组件b
|   ├── images             图片资源
|   ├── mixins             混合组件使用
|   ├── pages              WePY页面目录（属于完整页面）
|   |   ├── index.wpy      index页面（经build后, 会在dist目录下的pages目录生成index.js、index.json、index.wxml和index.wxss文件）
|   |   └── other.wpy      other页面（经build后, 会在dist目录下的pages目录生成other.js、other.json、other.wxml和other.wxss文件）
|   ├── plugins            插件
|   ├── store              转态管理
|   ├── utils              工具
|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经build后, 会在dist目录下生成app.js、app.json和app.wxss文件）
└── package.json           项目的package配置
```


### 二、wepy编译
在微信开发者工具导入项目后, 即可查看编译后的项目

1. `npm run dev` 开发者模式, 编译类型为 weapp
2. `npm run dev:web` 开发者模式, 编译类型为 web
3. `npm run build:dev` 打包开发环境线上包
4. `npm run build:uat` 打包测试环境线上包
5. `npm run build:prod` 打包生产环境线上包

### 三、在编辑器中使用（默认使用 vscode）
#### Vetur
```
1. 在 Code 里先安装 Vue 的语法高亮插件 Vetur

2. 打开任意 .wpy 文件

3. 点击右下角的选择语言模式, 默认为纯文本

4. 在弹出的窗口中选择 .wpy 的配置文件关联...

5. 在选择要与 .wpy 关联的语言模式 中选择 Vue

6. 在VS Code编辑器设置中设置。 //文件-首选项-设置-settings.json settings.json "files.associations": { "*.wpy": "vue" }
```

#### wpy-beautify
```
格式化 .wpy 文件的插件
```

### 四、实现功能
1. 环境配置
2. 基于`wepy.request`封装Ajax

### 五、微信开发者工具
1. 下载地址：https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki&download_version=1021902010&version_type=1

2. 使用指南：

    (1) 在开发者工具中导入脚手架项目

    (2) appID 使用测试号id

    (3) 相关文档： https://developers.weixin.qq.com/miniprogram/dev/devtools/sandbox.html?t=19032513

### 六、相关文档
开发文档：https://tencent.github.io/wepy/index.html

问题文档：https://github.com/Tencent/wepy/issues




#webpack 基本配置  
##用一个计算器小实例配合 webpack 搭建一个模块化、组件化的项目

-   First step:  
    三大件  
    webpack  
    webpack-cli  
    webpack-dev-server

-   Second step:  
    六件套(通常)  
    处理 JS -> ES6 ES7 ES8 装饰器  
    ES6  
    babel-loader@7  
    babel-core  
    bable-preset-env  
    ES7  
    +babel-plugin-transform-runtime  
    装饰器  
    babel-plugin-transform-decorators  
    babel-plugin-transform-decorators-legacy

-   Third step:  
    处理样式 sass -> css -> style  
    sass-loader  
    node-sass  
    css-loader  
    postcss-loader auotprefixer //兼容 css3 前缀，如果需要  
    style-loader

-   Forth step:  
    处理模板  
    ejs-loader

-   Fifth step:  
    处理 HTML  
    html-webpack-plugin

*   "scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1",  
    "dev": "webpack-dev-server --config webpack.config.js",// 配置运行命令 指定 webpack.config.js 为配置文件  
    "build": "webpack --config webpack.config.js" //根据 webpack.config.js 进行打包  
    },

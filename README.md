# yingjun-pms
迎君酒店管理系统

## 技术栈
本系统采用前后端分离协同开发，整个系统使用ECMAScript2017，即 [es6](http://es6.ruanyifeng.com/)  
前端：  js框架：[React](https://facebook.github.io/react/)  
       UI：[Ant Design](https://ant.design/index-cn)  
       构建：[webpack](https://doc.webpack-china.org/)  
       数据操作：fetch  
后端：  [Nodejs](http://nodejs.cn/)  
数据库：MongoDB  

## 需要安装的软件
1. [nodejs](http://nodejs.cn/)
1. [yarn](https://yarnpkg.com/zh-Hans/)
1. [ide webstorm](http://www.jetbrains.com/webstorm/) license server : http://idea.imsxm.com/
1. [git](https://git-scm.com/)

## Build Setup
> 使用[yarn](https://yarnpkg.com/zh-Hans/)

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# clear cache 如果发现源码与webpack编译文件明显不一致，有可能是缓存脏数据
yarn run clear-cache

```

## 脚手架步骤
1. git clone zk-react-template-management object-name
2. cd object-name
3. rm -rf .git
4. change local-default to local
5. yarn


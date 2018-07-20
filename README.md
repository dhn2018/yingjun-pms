# yingjun-pms
迎君酒店管理系统

## 技术栈
本系统采用前后端分离协同开发，整个系统使用ECMAScript2017，即[es6](http://es6.ruanyifeng.com/)
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

## 前后端分离 ngnix配置 参考

```bash
# 服务地址
upstream api_service {
  server localhost:8080;
  keepalive 2000;
}
#
server {
  listen       80;
  server_name  localhost;
  location / {
    root /home/app/nginx/html; // 前端打包之后的文件存放路径
    index index.html;
    try_files $uri $uri/ /index.html; #react-router 防止页面刷新出现404
  }
  location ^~/api { // 代理ajax请求，前端的ajax请求配置了统一的baseUrl = ‘/api’
     proxy_pass http://api_service/;
     proxy_set_header Host  $http_host;
     proxy_set_header Connection close;
     proxy_set_header X-Real-IP $remote_addr;
     proxy_set_header X-Forwarded-Server $host;
  }
}
```
## 脚手架步骤
1. git clone zk-react-template-management object-name
2. cd object-name
3. rm -rf .git
4. change local-default to local
5. yarn


# one-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目结构

```
.
├── README.md
├── dist  // 打包构建后的文件夹
│   ├── build.js
│   └── build.js.map
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── main.js
│   ├── Api
│   │   ├── api.js  // 页面请求
│   │   ├── http.js //  axios 封装 fetch、post请求及http
│   ├── assets
│   │   └── logo.png
│   ├── components // 组件文件
│   │   └── Footer.vue
│   │   └── Header.vue
│   │   └── Hello.vue
│   │   └── Loading.vue
│   ├── router // 路由配置文件
│   │   └── index.js
│   ├── store // 数据储存
│   │   ├── index.js
│   │   ├── AppModule
│   │   │   └── index.js  // action 请求 数据组装
│   │   │   └── Type.js   //  常量
│   │   ├── BookModule
│   │   │   └── index.js
│   │   │   └── Type.js
│   │   ├── ListModule
│   │   │   └── index.js
│   │   │   └── Type.js
│   │   ├── MusicModule
│   │   │   └── index.js
│   │   │   └── Type.js
│   ├── views // 页面
│   │   └── BookPage.vue
│   │   └── Dashboard.vue
│   │   └── MovePage.vue
│   │   └── MusicPage.vue
│   │   └── NotFound.vue
│   │   └── Welcome.vue
```

### 技术栈
* Vue 2.0
* vue-router
* vuex
* axios
* bootstrap

### 首次登录验证；页面切换； 数据请求
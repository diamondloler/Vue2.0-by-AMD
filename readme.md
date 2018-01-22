# vue2.0 by amd MVVM前端项目

这个是使用`vuejs2.0` 构建的vue2.0 by amd前端项目

## 项目依赖

项目尝试根据`AMD规范`布局代码结构，整个项目所有的代码都是`RequireJS`控制下进行封装。`VueJS`部分的依赖如下：

- 等下再告诉你！

## JS文件规范

所有的JS引用都应该符合requireJS规范，即所有自定义JS模块（不包含第三方）都应该包裹在define结构里面。

```JS
define("模块完整名称[包含命名路径]", ["模块依赖包"], function([依赖包的局部引用]){

    //具体的JS代码及逻辑
});

## Example:

define("page/index",["jquery"],function($){
	$(...).xxx(..)
	...
})
```

## 文件布局/分布

- 只有一个`HTML`文件入口。其他`css` / `js` / `html` 都是使用`AMD`方式载入，

- `index.html` 相当于`layout`容器，所有的其他页面都是按需加载进这个容器里面。

- `page/` 文件夹，存放所有的页面模板，包括页面使用到的`css` / `js`，所有的页面都是使用vuejs封装成vm对象引入容器中。
> 注意：该目录目录下不能存放任何非页面的组件及`js`。

- `component` 文件夹，存放所有片段模板组件，自定义组件（包含逻辑组件）。

- `css` 文件夹，存放公共css组件。

- `lib` 文件夹，存放所有第三方类库，第三方类库引入是使用`bower`。引入命令如下：
```
bower install [第三方类库名] --save --production
```

- `config` 文件夹，存放 `requireJS` 依赖定义及页面路由配置。

- `service` 文件夹，存放所有ajax交互服务的封装；
所以组件间的通信，我们建议使用引入所以组件间的通信，
我们建议使用引入 `EventBus` --  使用一个统一的全局事件通道。

## 引用路由

请参考 `config/router.js` 文件。 

在新增页面后，请一定要修改此文件增加新页面的路由。



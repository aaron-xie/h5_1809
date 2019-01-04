[TOC]

#VUE

##Vue-Router
Vue-Router允许我们通过不同的 URL 访问不同的内容。
可以实现多视图的单页Web应用（SPA）


###安装和引入
* script标签引入
>在 Vue 后面加载 vue-router，它会自动实现安装

```html
    <script src="./lib/vue.js"></script>
    <script src="./lib/vue-router.js"></script>
```

* npm方式
如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能

```javascript
    import Vue from 'vue';
    import VueRouter from 'vue-router';

    // 调用Vue.use手动安装，之后才能在实例中通过this.$route访问
    Vue.use(VueRouter);
```
###使用vue-router步骤
1. 引入vue-router
2. 使用vue-router（script标签引入方式自动完成）
3. 实例化router并配置参数
4. 注入router实例到vue实例

###使用

####参数配置
* mode：路由模式
    - hash（默认）
    - history
    >需要后端配置，任意路径返回index.html（IE9中会自动降级到hash模式）
* routes：路由配置
>核心配置，包含所有的页面配置

    * name：设置路由名称，方便执行路由跳转
    * path：访问这个页面的路径
    * component 指定路由组件（显示到`<router-view/>`中的组件）
        - 命名视图：在多视图组件中，给命名视图指定路由组件
        >默认指定default视图
    * props（Boolean|Object|Function）：路由组件传参（[详情](#组件传参props)） 
    * redirect：重定向
    * children：嵌套路由配置
    >子路由一般使用相对路径的path

####声明式导航
> 利用标签来实现路由跳转

* `<router-link> `
    - to：设置目标路由的链接。 点击后，跳到目标路由
    - replace： 跳转到目标路由且不留下 history 记录
    - append：追加到当前路由后（只有相对路径有效）
    ```html
        <!-- 当前路由：/a , 点击变成：/b -->
        <router-link to="/b"> 

        <!-- 当前路由：/a , 点击变成：/a/b -->
        <router-link to="/b" append> 
    ```
    - tag：让`<router-link>` 渲染成某种标签（默认：a）
    - active-class：匹配路由时`<router-link>`使用的类名
    - exact-active-class：精确匹配路由时`<router-link>`使用的类名
    - event: 触发路由的事件（默认：click）
* `<router-view> `
    - name 命名视图（默认：default）

####编程式导航
>利用Router实例（this.$router）的方法实现路由跳转

* $router.push(location)
```javascript
    this.$router.push('/home');//等同于：<router-link to="/home"></router>

    // 对象
    this.$router.push({ path: '/home' })
    this.$router.push({name:'Home'})
```
* $router.replace(location)
>类似于router.push()，唯一不同的是它不会向 history 添加新记录
* $router.go(n)/$router.back()/$router.forward()
> 在history 记录中向前或者后退多少步，类似 window.history.go(n)

####路由传参

#####动态路由
>通过`this.$route`获取当前路由信息，路径改变自动把参数传入$route.params


```javascript
    //路由组件
    const User = {
        template:`<div>
            {{$route.params.id}}
        </div>`
    }

    //路由配置
    routes:[
        {
            path:'/user/:id',
            component:User
        }
    ]
```
>PS：当路由从 `/user/laoxie` 导航到 `/user/tiantian`，原来的组件实例会被复用。因为两个路由都渲染同个组件`User`，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。解决方案：

    * 利用watch 监测 $route 对象变化
    * beforeRouteUpdate路由守卫（2.2+）

    ```js
        const User = {
            watch: {
                '$route' (to, from) {
                // 对路由变化作出响应...
                }
            },

            beforeRouteUpdate (to, from, next) {
                //to:目标路由
                //from:当前路由
                //一定要调用next()方法才可进入目标路由
            }
        }
    ```


#####路由组件传参：props
>以上写法较为繁琐,而且组件与路由高度耦合，可以使用props组件传参的方式解耦

* Boolean模式
>如果 props 被设置为 true，route.params 将会被设置为组件属性： `v-bind="router.params"`

```javascript
    const User = {
        props:['id'],
        template:`<div>
            {{id}}
        </div>`
    }

    routes:[
        {
            path:'/user/:id',
            component:User,
            props:true //动态属性id被传入组件组件中
        }
    ]
```
* Object模式
>如果 props 是一个对象，它会被按原样设置为组件属性，一般用于静态数据

```javascript
    const User = {
        props:['myname'],
        template:`<div>
            {{myname}}
        </div>`
    }

    routes:[
        {
            path:'/user/:id',
            component:User,
            props:{myname:'laoxie'} //myname属性会被传入到组件User中
        }
    ]
```
* Function模式
>实现更灵活的参数传递，如可以把query参数传入组件

```javascript
    const Settings = {
        props:['query'],
        template:`<div>
            {{query}}
        </div>`
    }

    routes:[
        {
            path:'/settings',
            component:Settings,
            props:(route) => ({ query: route.query.q }) 
        }
    ]
```

###导航守卫（路由钩子函数）
>路由导航过程中分别执行的函数


**完整的导航解析流程**

1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

####全局守卫
>所有的路由切换都会执行，一般写在路由配置文件中

* router.beforeEach(fn)
    - to
    - from
    - next()
* router.afterEach(fn)
    - to
    - from

####路由独享的守卫
>写在路由配置中

* beforeEnter(fn)
    - to
    - from
    - next()

####组件内的守卫
* beforeRouteEnter(fn)
    - to
    - from
    - next()
* beforeRouteUpdate(fn)
    - to
    - from
    - next()
* beforeRouteLeave(fn)
    - to
    - from
    - next()

---

【案例】

* 利用重定向实现404页面
* 后台管理系统登录验证
    - 必须登录系统才能查看其他页面
    - 不登陆直接访问自动跳到登录界面

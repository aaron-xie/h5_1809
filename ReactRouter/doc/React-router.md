#React-router
React-router4（以下简称RR4）遵循React的设计万物皆组件的理念。所以只是一堆 提供了导航功能的组件，具有声明式（引入即用），可组合性的特点

##介绍
react-router被分为一下几部分:

* react-router  核心，是浏览器和原生应用的通用部分，不提供dom操作进行跳转的api。
* react-router-dom  基于浏览器环境的开发。
* react-router-native   基于react-native环境的开发。

>安装 react-router-dom 或 react-router-native 时，都会将 react-router 作为依赖安装

##安装
>PS：浏览器开发就只需要安装react-router-dom

```
     npm install react-router-dom --save
```

##常用组件

###路由类型
####BrowserRouter`<BrowserRouter/>`
>react-router-dom增加的组件，利用path来实现路由（使用pushState和popState事件构建路由）。使得页面和浏览器的history保持一致。如：http://localhost/home

####HashRouter`<HashRouter/>`
>react-router-dom增加的组件，利用hash来实现路由（使用window.location.hash和hashchange事件构建路由），如：http://localhost/#/home

###路由渲染方式
####Route`<Route/>`
>是 React Router 中最重要的组件了，它最基本的职责就是：当页面的访问地址与 Route 上的 path 匹配时，就在`<Route/>`所在位置渲染出对应的组件

```html
    <Route path="/home" component={Home} />
    <Route path="/list" component={List} />
    <Route path="/users" component={User} />
```

* path(String)：当浏览器地址与path地址匹配时，则渲染component对应的组件
>如果不给path，那么路由将总是匹配
* component(Component)：在path匹配成功之后会渲染这个组件
>往组件props注入history,location,match参数
* render(Function)：在path匹配成功之后会渲染这个函数返回的内容
* exact(Boolean)：是否精确匹配
```html
  <Route path="/home" component={Home}/> //浏览器地址为'/home' 和'/home/a'，都能匹配
  <Route path="/home" component={Home} exact /> //浏览器地址为'/home'时能匹配 ，浏览器地址为'/home/a'时不能匹配
```

####Redirect`<Redirect/>`
用于重定向页面
* from(String)：浏览器地址为from的值时，重定向到to所在的地址
* to(String|Object)：跳转的地址（如值为Object，有以下参数）
  * pathname，跳转到的URL。
  * search，跳转后的url参数。此例中，跳转后的url是http://127.0.0.1:9090/p2?p1=1&p2=2
  * state，会保存在this.history.location.state中，可以用于传递数据


####Switch`<Switch/>`
多个Route可能会被同时渲染（如下），用Switch来包裹多个Route/Redirect组件，只渲染出第一个与浏览器访问地址匹配的 `<Route>` 或 `<Redirect>`（注意顺序问题）
```html
  <!-- 以下可能会同时渲染两个组件 -->
  <Route path="/" component={Home} />
  <Route path="/home" component={Home} />
  <Route path="/list" component={List} />

  <!-- 以下只渲染一个组件 -->
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/list" component={List} />
    <Redirecct to="/404"/>
  </Switch>
```

* 用途：
  - 渲染单个组件
  - 重定向
  - 404页面

##导航
###声明式导航
>利用组件(Link或NavLink)属性实现路由跳转

####Link`<Link/>`
>为你的应用提供声明式，无障碍导航，默认解析成a标签
    
* to(String): 点击跳转到指定路径
>如果只是单纯的跳转就直接用字符串形式的路径

```html
    <Link to="/home" />
```

* to(Object):携带参数跳转到指定路径（同Redirect）
>跳转时携带详细信息（比如这是个支付跳转，需要把商品的价格等信息传递过去）

```html
    <Link to={{
      pathname: '/pay',
      search: '?id=123456',
      state: { price: 998 }
    }} />
```

* replace: bool
>为 true 时，点击链接后将使用新地址替换掉上一次访问的地址


####NavLink`<NavLink/>`
>这是 `<Link/> `的特殊版，顾名思义这就是为页面导航准备的。因为导航需要有 “激活状态”

* activeClassName(String)
>导航选中激活时候应用的样式名，默认样式名为 active

* activeStyle(Object)
>如果不想使用样式名就直接写style

* to: string|object
 >同`<Link/>`

* isActive: func
通过返回值（boolean）决定导航是否激活，或者在导航激活时候做点别的事情。不管怎样，它不能决定对应页面是否可以渲染。


###编程式导航
>利用路由提供的history对象实现路由跳转
* history.push(path|Object)
* history.replace(path|Object)

####获取history对象
* 利用`<Route/>`渲染的组件
>直接通过props.history获取

* withRouter
>利用withRouter高阶组件包装后,直接通过组件的props.history获取，就可以使用编程式导航进行点击跳转

* Context（了解，不推荐）
>RR4 在 Router 组件中通过Contex暴露了一个router对象，router对象下包含history（即：this.context.router.history）

####路由的Enter与Leave
>相比之前的版本，RR4有了很大的改变，废除了之前版本onEnter、onLeave等路由钩子函数，利用组件生命周期函数来替代
* 使用componentDidMount或componentWillMount来代替onEnter
* 使用componentDidUpdate 或 componentWillUpdate来代替onUpdate
* 使用componentWillUnmount来代替onLeave


##动态路由
>在匹配路径path 的后面加上冒号 + 参数， 如`path ="goods/:id"`

* 获取动态id方式：
当渲染组件时，路由会给我们组件注入3个参数（history,location,match），这里使用match 就可以了，它有一个params属性，就是专门获取动态路由参数的

##嵌套路由
props.match是实现嵌套路由的对象，当我们在某个页面跳转到它的下一级子页面时，我们不会显显性地写出当前页面的路由，而是用match对象的path和url属性。 

* match.path：是指写在 `<Route/>` 中的 path 参数；
* match.url：是指在浏览器中显示的真实 URL。

>match.path 可用于嵌套组件中的 `<Route/>`，而 match.url 可用于嵌套组件中的 `<Link/>`

```html
  <div className="subnav">
    <NavLink to={props.match.path + "/computer"} activeClassName="active">电脑</NavLink>
    <NavLink to={props.match.path + "/pad"} activeClassName="active">平板</NavLink>
    <NavLink to={props.match.path + "/acc"} activeClassName="active">配件</NavLink>
  </div>

  <Switch>
    <Route path={props.match.url + "/phone"} component={Phone}/>
    <Route path={props.match.url + "/computer"} component={Computer}/>
    <Redirect from={props.match.url} to={props.match.path + "/computer"} exact />
    <Route path={props.match.url + "/pad"} component={Pad}/>
    <Route path={props.match.url + "/acc"} component={Acc}/>
  </Switch>
```


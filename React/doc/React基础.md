#React

##了解React
React是一个视图层的框架，起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。

React官网地址：http://facebook.github.io/react/

###React 特点
* 声明式设计
>React采用声明范式，可以轻松描述应用。
* 高性能
>React通过对DOM的模拟(Virtual DOM)，最大限度地减少与DOM的交互。
* 组件化开发
>通过 React 构建组件，使得代码更加容易得到复用，能够**高效率**的应用在大项目的开发中。
* 单向响应的数据流
>React 中的数据是单向自顶向下传递的，React 之所以能胜任大型复杂前端项目的开发，是因为其 单向数据流 这一重要特性
* JSX扩展
>JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
* 灵活
>React可以与已知的库或框架很好地配合。


##安装与引入
###script标签引入
* react.js          React 的核心库
* react-dom.js      提供与 DOM 相关的功能
* babel.js          React使用ES6语法和浏览器不支持的JSX语法，所以必须引用Babel进行编译
>在浏览器中使用 Babel 来编译 JSX 效率是非常低的

###通过webpack手动搭建React环境
>通过webpack + es6来使用react，所以需要安装以下模块来搭建环境

* react & react-dom
* babel-loader & babel-core & babel-preset-env & babel-preset-react
* webpack & webpack-dev-server

###通过脚手架快速搭建React环境
>create-react-app 是来自于官方 Facebook的脚手架工具，通过该命令我们无需配置就能快速构建 React 开发环境

* 安装create-react-app
```bash
    npm install -g create-react-app
```

* 利用create-react-app创建i项目
```bash
    create-react-app my-app
```

##使用

###虚拟DOM（Virtual DOM）
在Web开发中，我们总需要将变化的数据实时反应到UI上，这时就需要对DOM进行操作。而复杂或频繁的DOM操作通常是性能瓶颈产生的原因（如何进行高性能的复杂DOM操作通常是衡量一个前端开发人员技能的重要指标）。React为此引入了虚拟DOM（Virtual DOM）的机制，根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分反映在真实 DOM上，这就是DOM diff算法（可以极大提高网页的性能）

<img src="img/dom.png" style="width:320px;">
<img src="img/virtualDOM.png" style="width:500px;">

>什么是虚拟DOM：结构类似于DOM树的 JavaScript 对象
* 创建虚拟DOM节点：React.createElement(component, props, ...children)


```javascript
    //测试以下节点操作代码花费时间，并尝试优化它
    for(let i=0;i<10000;i++){
        let btn = document.querySelector('.btn');
        let num = btn.innerText;
        btn.innerText = ++num;
    }
```

###JSX语法
一种特殊的js语法，是ECMAScript的扩展，可以让我们在js代码中直接使用html标签，再通过编译器（Babel）转成标准的 JavaScript 后由浏览器执行。

Babel解析规则：
>分清html标签、组件、js代码

* 遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；
* 遇到代码块（以 { 开头），就用 JavaScript 规则解析；

>注意：
* 因为Javascript代码与JSX代码并不兼容，凡是使用JSX的script标签都需要加上 type="text/babel"
* 在jsx代码中，同为js关键字的html属性不能直接使用
    * class -> className,
    * for -> htmlFor
    * tabindex -> tabIndex
* style 属性的值接收一个对象，css 的属性必须为驼峰写法
>style={{"backgroundColor":"#f60"}}
* 必须结束标签（如：`<input type="text"/>`）
* 花括号`{}`内为js表达式，不允许出现var,let,const等关键字
* 使用js语法注释（如{`/*注释内容*/`}，`//注释内容`）

>PS: jsx不是必须的，它只是`React.createElement(type,[props],[...children])`的语法糖，在我们应用JSX进行开发的时候，其实它最终会转化成React.createElement…去创建元素。

###UI渲染
* ReactDOM.render(template,targetDOM)
>是React的最基本方法，用于将模板转为HTML语言，并插入指定的DOM节点

    - template：可以是HTML标签或 React 组件，React利用大小写来区分标签与组件
        - 要渲染 HTML 标签，只需在 JSX 里使用小写字母的标签名。
        - 要渲染 React 组件，只需创建一个大写字母开头的本地变量
    - targetDOM：挂载点，必须为元素节点



##面向组件编程
>所谓组件，即封装起来的具有独立功能的UI部件，用来组合成更高级东西的物件，通俗来讲，就是“创建一个新的 HTML 标签”
* 组件名必须大写开头
* 只能包含一个顶层标签

![组件](./img/component.jpg "Optional title")

>PS：在开发过程中，要善于观察和抽象。尤其是在项目前期，不要着急写代码，一定要观察项目的原型图或者设计稿，弄懂哪些部分是可以拆分成复用的公共组件的。这样做能让你后面的工作，事半功倍

###组件定义
* 函数组件（无状态组件、受控组件、UI组件）
>纯展示组件，这种组件只负责根据外部传入的props来展示，书写更简洁，执行效率更高

    - 特点
        - 无state状态，只能访问传入的props属性
        - 组件不会被实例化，整体渲染性能得到提升
        - 组件不能访问this对象
        - 组件无法访问生命周期的方法

    >PS：无状态组件被鼓励在大型项目中尽可能以简单的写法来分割原本庞大的组件，未来React也会这种面向无状态组件在譬如无意义的检查和内存分配领域进行一系列优化，所以只要有可能，尽量使用无状态组件。

    ```js
        //定义
        function MyComponent(props){
            return <h1>函数组件</h1>
        }

        //使用
        ReactDOM.render(
            <MyComponent myname="laoxie" />,
            document.getElementById('app')
        );
    ```

* 类组件（有状态组件、非受控组件、容器组件）
>类继承组件有更丰富的特性（state状态、生命周期等）

```js
    class About extends React.Component{
        render(){
            return <div className="box">类组件{this.props.myname}</div>
        }
    }
```



###组件属性props
>是一个对象，包含使用组件时的所有属性，属性必须为只读的，这一点非常重要，请严格遵守

* 获取方式
    - 函数声明式组件，通过参数props访问
    - 类继承组件，通过this.props访问

* 定义默认属性：defaultProps
>通常情况下，我们需要为组件的某些属性设定默认值。就像 HTML 标签的属性也有默认值一样，（如 form 标签的 method 属性默认值是 GET，input 标签的 type 属性默认值是 text ）

    ```js
        MyComponent.defaultProps = {
          name: 'laoxie'
        }

        //ES6写法
        static defaultProps = {
            name: 'laoxie'
        }
    ```

* 属性的类型及校验（用于限制传入属性的数据类型）
>给组件设置静态字段 propTypes 来设置组件各个属性的类型检查器

    - React 内置数据类型检查器
    >在React 16版本之后, PropTypes 从react包 分离到了prop-types 包中
    ```js
        import PropTypes from 'prop-types';
        MyComponent.propTypes = {
            name: PropTypes.string
        }
    ```
    - 自定义属性验证器
    ```js
        MyComponent.propTypes = {
            //自定义验证规则
            myname:(props,propName,comName)=>{
                if(typeof props[propName] != 'string'){
                    return new Error(propName + '必须为字符串');
                }
            }
        }
    ```

* `props.children`: 获取双标签组件的内容，返回值如下
    - 无内容：Undefined
    - 文字内容：String
    - 单个标签：Object
    - 多个标签：Array

    >PS：可利用 React.Children对象下的方法进行操作


###组件状态state
>React会在状态改变后自动执行组件中的render方法渲染视图

* 初始状态
```js
    class MyComponent extends React.Component {
        constructor() {
            super(); // 这行代码不能少哦
            this.state = {
                isLiked: false
            }
        }
    }
```

* 修改状态setState: 
    * 格式：`setState(nextState[,callback])`
        - nextState: 将要设置的新状态，该状态会和当前的state合并
        - callback: 可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。

    * 依赖上次setState的结果
    >格式：`setState(fn [,callback])`
        * fn(prevState)

    >PS：调用setState()并不会马上修改 state。而是进入到一个更新队列里面，所以不能在组件内部通过this.state直接修改状态，因为修改后会被setState()替换（如下两次输出都为false）

    ```js
        console.log(this.state.isLiked);//false
        this.setState({
        isLiked: true
        });
        console.log(this.state.checked);//false
    ```

* 强制更新组件
>格式：forceUpdate(callback)

    forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()，一般来说，应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发render()调用

###state VS props
>一个组件的 state 中的数据可以通过 props 传给子组件，一个组件可以使用外部传入的 props 来初始化自己的 state。但是它们的职责其实非常明晰分明：**state 是让组件控制自己的状态，props 是让外部对组件自己进行配置**


###组件通讯
####props逐层传递
>通过逐层传递到相应的html标签上

* 缺点：
    - 操作繁琐
    - 难以维护

####context组件共享
>某个组件只要往自己的 context 里面放了某些状态，这个组件之下的所有子组件都直接访问这个状态(context好比组件的全局变量，能让所有子组件直接访问)

* 实现步骤
    1. 定义数据：父组件设置getChildContext方法并返回context对象
    2. 验证数据类型：父组件设置childContextTypes静态属性声明和验证context对象的属性
    3. 验证数据类型：子组件设置contextTypes静态属性声明和验证context
    4. 使用数据：子组件通过this.context.xxx获取需要的共享数据

##事件处理
* 采用驼峰式写法（如：onClick,onKeyDown）

###event对象与事件处理函数传参
* 默认绑定方式
    + 事件处理函数的第一个参数为event对象（与原生js一致）
    + 无法传递其他参数
    ```js
        //定义
        clickHandler(e){
            console.log(e);
        }

        //使用
        <button onClick={this.clickHandler}>按钮</button>
    ```
* 使用箭头函数调用
    + event对象需要手动传递
    + 可以传递其他参数
    ```js
        //定义
        clickHandler(e,num){
            console.log(e,num);
        }

        //使用
        <button onClick={e=>this.clickHandler(e,10)}>按钮</button>
    ```
* bind方式
    + event事件对象会在所有参数后隐式传递
    ```js
        //定义
        clickHandler(num1,num2,e){
            console.log(num1,num2,e);
        }

        //使用
        <button onClick={this.clickHandler.bind(this,10,20)}>按钮</button>
    ```

###事件处理函数中的this指向
```js
    <button onClick={this.clickHandler}>按钮</button>
```

>以上clickHandler被调用时，内部的this不指向组件实例，也不指向button元素，而是得到undefined，如果需要用到this需要使用以下方式改变this指向

* bind方法
    + 执行时bind
    + 初始化时bind
* 使用箭头函数
    + 定义时使用箭头函数
    + 执行时使用箭头函数



##获取真实的DOM节点
* 通过refs获取节点，并进行节点操作
```js
    <button ref="btnSave">保存</button>

    //获取
    this.refs.btnSave

    //设置为实例属性
    <button ref={form => {this.form = form}} />
```


##列表&key
使用 JavaScript 的 map() 方法来创建列表

###key
>react利用key来区分组件的
    * 相同的key表示同一个组件，react不会重新销毁创建组件实例，只可能更新；
    * key不同，react会销毁已有的组件实例，重新创建组件新的实例
* 数组生成的同级同类型的组件上要保持唯一
* key应该是稳定唯一的，尽量不要用数组的索引index作为key（排序或添加时索引值会改变）

---

【案例】

* 名片切换
* 走动的时钟
* 待办事项todolist
* 利用组件布局一个页面（Header,Main,Footer）
    - Header组件中有Logo和Nav组件
    - Main组件分左右布局（Side侧栏、Content内容）
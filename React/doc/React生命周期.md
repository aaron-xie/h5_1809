#React

##组件生命周期
>组件的生命周期分成三个状态：
* Mounting：已插入真实 DOM
* Updating：正在被重新渲染
* Unmounting：已移出真实 DOM

![组件](./img/life.jpg "Optional title")

React 为每个状态都提供了两种声明周期函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数

* componentWillMount 
>在组件被渲染到页面上之前执行，在组件的整个生命周期内只执行一次

    - 这个时候是做如下操作的好时机：
        - 发起ajax请求
        - 设置 setInterval、setTimeout 等计时器操作
        - 读取本地存储数据

* componentDidMount 
>组件被渲染到页面上后立马执行，在组件的整个生命周期内只执行一次。

    - 这个时候是做如下操作的好时机：
        - 某些依赖组件 DOM 节点的操作

* componentWillUpdate(nextProps, nextState)
>在初始化时不会被调用，可能在以下两种情况下被调用：
    * 当组件 shouldComponentUpdate 返回 true 且接收到新的props或者state但还没有render时被调用
    * 或者调用 forceUpdate 时将触发此函数

* componentDidUpdate(nextProps, nextState)
>在组件完成更新后立即调用。在初始化时不会被调用。

    * 在此处是做这些事情的好时机：
        * 执行依赖新 DOM 节点的操作。
        * 依据新的属性发起新的网络请求。
        >注意：一定要在确认属性变化后再发起ajax请求，否则极有可能进入死循环：DidUpdate -> ajax -> changeProps -> DidUpdate -> ...）

* componentWillUnmount
>在组件从 DOM 中移除之前立刻被调用。

    * 此处最适合做以下操作
        - 清除定时器、
        - 终止ajax请求


* componentWillReceiveProps(nextProps)
>该方法在初始化render时不会被调用，可能在以下两种情况下被调用：
    * 组件接收到了新的属性。新的属性会通过 nextProps 获取到。
    * 组件没有收到新的属性，但是由于父组件重新渲染导致当前组件也被重新渲染。

* shouldComponentUpdate(prevProps, nextState)
>需要返回一个布尔值来决定是否重新渲染组件，在组件接收到新的props或者state时被调用。
    * 在初始化时或者使用forceUpdate时不被调用。
    * 可以在你确认不需要更新组件时使用。

>PS：这是一个询问式的生命周期函数，如果返回true，组件将触发重新渲染过程，如果返回false 组件将不会触发重新渲染。因此，合理地利用该函数可以一定程度节省开销，提高系统的性能
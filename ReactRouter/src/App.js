import React from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';

import PropTypes from 'prop-types';

import Home from './components/Home';
import List from './components/List';
import Mine from './components/Mine';
import Goods from './components/Goods';

// 引入ant-design（全部引入）
// import { Menu, Icon } from 'antd';
// import 'antd/dist/antd.css';

// 引入Button组件（按需引入）
// import Button from 'antd/lib/button';
// import 'antd/lib/button/style';

// 利用babel-plugin-import实现按需引入
import { Menu, Icon } from 'antd';


import './sass/page.scss';

/*
    <Route/>组件的职责：根据浏览器url匹配Route的path属性，渲染相应的componet
    编程式导航
        * 获取history对象
            * 通过<Route/>渲染组件
            * 通过withRouter高阶组件
            * 
*/

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            menu:[
                {
                    text:'首页',
                    path:'/home',
                    name:'Home',
                    icon:'home'
                },{
                    text:'列表',
                    path:'/list',
                    name:'List',
                    icon:'bars'
                },{
                    text:'我的',
                    path:'/mine',
                    name:'Mine',
                    icon:'user'
                },
            ],
            current:'/home'

        }

        // this绑定
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({ item, key, keyPath }){
        //两个问题：1、如何获取路由路径，2、如何获取history对象
        this.setState({
            current:key
        });

        // console.log(this.props.history);

        // 
        this.props.history.push(key)
    }
    componentDidMount(){

        // 利用生命周期函数来保持当前路由高亮
        // 获取当前路由（hash,history）
        let hash = window.location.hash;// 可能得到的值：/home,/list,/list/computer
        hash = hash.split('/')[1];

        this.setState({
            current:'/'+hash
        })

    }
    render(){
        return (
            <div>
                <h1>React Router路由演示</h1>
                {/* <NavLink 
                to="/home" 
                activeClassName="current" 
                activeStyle={{color:'#58bc58',fontWeight:'bold'}}>首页</NavLink>
                <NavLink to="/list" activeClassName="current"
                activeStyle={{color:'#58bc58',fontWeight:'bold'}}>列表</NavLink>
                <NavLink to="/mine" activeClassName="current"
                activeStyle={{color:'#58bc58',fontWeight:'bold'}}>我的</NavLink> */}
                <Menu
                mode="horizontal"
                selectedKeys={[this.state.current]}
                onClick={this.handleChange}
                >
                    {
                        this.state.menu.map(menu=>{
                            return (
                                <Menu.Item key={menu.path}>
                                    <Icon type={menu.icon}/>{menu.text}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/mine" component={Mine}/>
                    <Route path="/goods/:id" component={Goods}/>
                    <Redirect from="/" to="/home"/>
                    {/* <Route path="/" component={Home} exact/> */}
                </Switch>
            </div>
        )
    }
}


App.contextTypes = {
    router:PropTypes.object
}

// 利用withRouter高阶组件包装App组件
App = withRouter(App);



export default App;

// 高阶组件的理解
// WidthRouter = (App)=>{
//     return <App history={xxxx}/>
// }
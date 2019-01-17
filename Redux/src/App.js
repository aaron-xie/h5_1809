import React from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';

import PropTypes from 'prop-types';

import Home from './components/Home';
import List from './components/List';
import Mine from './components/Mine';
import Goods from './components/Goods';
import Cart from './components/Cart';

// 引入ant-design（全部引入）
import { Menu, Icon,Badge } from 'antd';
import 'antd/dist/antd.css';

import './sass/page.scss';

import {connect} from 'react-redux';

// import store from './store';
// console.log('App:',store.getState());


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
                {
                    text:'购物车',
                    path:'/cart',
                    name:'Cart',
                    icon:'shopping-cart'
                }
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
        // 在组件中获取redux的state
        // 通过this.props.cart,this.props.goods
        console.log('props:',this.props)
        return (
            <div>
                <Menu
                mode="horizontal"
                selectedKeys={[this.state.current]}
                onClick={this.handleChange}
                >
                    {
                        this.state.menu.map(menu=>{
                            return (

                                <Menu.Item key={menu.path}>
                                    <Badge count={menu.name=='Cart'?this.props.goodslist.length:null}>
                                        <Icon type={menu.icon}/>{menu.text}
                                    </Badge>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/mine" component={Mine}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/goods/:id" component={Goods}/>
                    <Redirect from="/" to="/home"/>
                    {/* <Route path="/" component={Home} exact/> */}
                </Switch>
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    console.log('mapStateToProps:',state)
    return {
        // 把goodslist属性映射到App的props中
        goodslist:state.cart.goodslist,
        price:state.goods.price
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        addcart:(goods)=>{
            dispatch({
                type:'ADD_TO_CART',
                payload:goods
            })
        }
    }
}

App = connect(mapStateToProps,mapDispatchToProps)(App);

App = withRouter(App);

export default App;